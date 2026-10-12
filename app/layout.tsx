import type { Metadata, Viewport } from "next";
import "@fontsource-variable/martian-mono/wdth.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Elias Bloem | Developer",
    template: "%s | Elias Bloem",
  },
  description:
    "Elias Bloem, developer in Belgium. Minecraft mods, VS Code extensions and small web tools.",
  metadataBase: new URL("https://eliasb.be"),
};

export const viewport: Viewport = {
  themeColor: "#11100e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
