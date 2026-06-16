import type { Metadata, Viewport } from "next";
import "./globals.css";
import { absoluteUrl, siteConfig } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: "%s" },
  description: "Apple-inspired mobile and front-end developer portfolio.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    images: [
      { url: absoluteUrl(siteConfig.defaultOgImage), width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.creator,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
