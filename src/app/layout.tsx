import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "Ravian AI",
    description: "Turn Data Into Decisions",
    url: "https://ravianai.vercel.app/",
    siteName: "Ravian AI",
    images: [
      {
        url: "https://ravianai.vercel.app/api/og?title=Next.js", // Dynamic og route
        width: 800,
        height: 600,
      },
      {
        url: "https://ravianai.vercel.app/api/og?title=Next.js", // Dynamic og route
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
