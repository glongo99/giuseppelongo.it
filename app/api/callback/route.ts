import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  console.log(
    "[api/callback] chiamata ricevuta:",
    new Date().toISOString(),
    "code:",
    code ? code.slice(0, 8) + "..." : "MANCANTE",
  );
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse(
      "Mancano GITHUB_OAUTH_CLIENT_ID o GITHUB_OAUTH_CLIENT_SECRET su Vercel.",
      { status: 500 },
    );
  }

  const tokenResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: `${request.nextUrl.origin}/api/callback`,
      }),
    },
  );

  const tokenData = await tokenResponse.json();
  console.log(
    "[api/callback] risposta GitHub:",
    tokenData.error ? `errore: ${tokenData.error}` : "token ricevuto ok",
  );

  // Questo script comunica il risultato alla finestra del CMS che ha aperto
  // il popup di login (protocollo atteso da Decap CMS).
  if (tokenData.error) {
    const html = `
      <script>
        (function() {
          function receiveMessage(e) {
            window.opener.postMessage(
              'authorization:github:error:${JSON.stringify(tokenData)}',
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })();
      </script>
    `;
    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  }

  const html = `
    <script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({ token: tokenData.access_token, provider: "github" })}',
            e.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  `;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}