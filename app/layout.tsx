import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Giuseppe Longo",
  description: "Progetti, percorso e scritti di Giuseppe Longo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body
        className={`${fraunces.variable} ${plexSans.variable} font-sans bg-paper text-ink antialiased`}
      >
        <Nav />
        <main className="max-w-wide mx-auto px-6 md:px-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
