import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Cursor from "./components/Cursor";
import "./globals.css";
import Scene from "./components/Scene";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Elias Bloem | Creative Developer",
    template: "%s | Elias Bloem"
  },
  description: "Portfolio of Elias Bloem, a creative developer specializing in interactive 3D experiences and innovative web design.",
  metadataBase: new URL("https://eliasb.be")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="scene-container fixed inset-0 z-0 pointer-events-none">
          <Scene />
        </div>
        <Cursor />
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
