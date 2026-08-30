import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handFont = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Elias Bloem | Creative Developer",
    template: "%s | Elias Bloem",
  },
  description:
    "Portfolio of Elias Bloem, a creative developer specializing in interactive 3D experiences and innovative web design.",
  metadataBase: new URL("https://eliasb.be"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${handFont.variable} antialiased`}
      >
        <main className="relative z-10 w-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}
