import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiwuuu — WhatsApp flows, done for you in 24h",
  description:
    "Kiwuuu designs your WhatsApp business flow. Live in 24 hours. No platform to learn, no code to touch. Founder-built.",
  metadataBase: new URL("https://kiwuuu.com"),
  openGraph: {
    title: "Kiwuuu — WhatsApp flows, done for you in 24h",
    description:
      "We design your WhatsApp business flow. Live in 24 hours. Founder-built.",
    url: "https://kiwuuu.com",
    siteName: "Kiwuuu",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
