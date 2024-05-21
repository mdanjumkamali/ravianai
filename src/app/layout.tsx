import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ravianai.vercel.app"),
  title: {
    default: "Ravian AI - Turn Data into Decisions",
    template: "%s | Ravian AI",
  },
  description:
    "Harness the power of advanced artificial intelligence with Ravian AI. Our platform transforms raw data into actionable insights, empowering businesses to make informed decisions and drive growth. Discover a suite of cutting-edge tools designed to optimize your data analysis, enhance AI model development, and provide comprehensive business intelligence. Join the future of data-driven decision-making with Ravian AI.",
  openGraph: {
    title: "Ravian AI",
    description:
      "Harness the power of advanced artificial intelligence with Ravian AI. Our platform transforms raw data into actionable insights, empowering businesses to make informed decisions and drive growth. Discover a suite of cutting-edge tools designed to optimize your data analysis, enhance AI model development, and provide comprehensive business intelligence. Join the future of data-driven decision-making with Ravian AI.",
    url: "https://ravianai.vercel.app",
    siteName: "Ravian AI",
    locale: "en_US",
    type: "website",
    images: "https://ravianai.vercel.app/og-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/og-bg.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
