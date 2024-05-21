import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   openGraph: {
//     title: "Ravian AI",
//     description: "Turn Data Into Decisions",
//     url: "https://ravianai.vercel.app/",
//     siteName: "Ravian AI",
//     images: [
//       {
//         url: "https://ravianai.vercel.app/api/og?title=Next.js", // Dynamic og route
//         width: 800,
//         height: 600,
//       },
//       {
//         url: "https://ravianai.vercel.app/api/og?title=Next.js", // Dynamic og route
//         width: 1800,
//         height: 1600,
//         alt: "My custom alt",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://ravianai.vercel.app"),
  title: {
    default: "Ravian AI",
    template: "%s | Ravian AI",
  },
  description:
    "Harness the power of advanced artificial intelligence with Ravian AI. Our platform transforms raw data into actionable insights, empowering businesses to make informed decisions and drive growth. Discover a suite of cutting-edge tools designed to optimize your data analysis, enhance AI model development, and provide comprehensive business intelligence. Join the future of data-driven decision-making with Ravian AI.",
  openGraph: {
    title: "Ravian AI",
    description:
      "Harness the power of advanced artificial intelligence with Ravian AI. Our platform transforms raw data into actionable insights, empowering businesses to make informed decisions and drive growth. Discover a suite of cutting-edge tools designed to optimize your data analysis, enhance AI model development, and provide comprehensive business intelligence. Join the future of data-driven decision-making with Ravian AI.",
    url: "https://ravianai.vercel.app",
    siteName: "Ravianai",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ravianai",
    card: "summary_large_image",
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
