import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const redirectUri = `${request.nextUrl.origin}/api/callback`;
  const scope = "repo,user";

  if (!clientId) {
    return new NextResponse(
      "Manca la variabile d'ambiente GITHUB_OAUTH_CLIENT_ID su Vercel.",
      { status: 500 },
    );
  }

  const authorizeUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${scope}`;

  return NextResponse.redirect(authorizeUrl);
}
