import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMQA - The AI that tests your code",
  description: "Write tests in plain English. Ship with confidence. AI-powered testing that writes, runs, and maintains tests automatically.",
  keywords: ["AI testing", "automated testing", "QA automation", "test automation", "continuous testing"],
  authors: [{ name: "IMQA" }],
  openGraph: {
    title: "IMQA - The AI that tests your code",
    description: "Write tests in plain English. Ship with confidence.",
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
      <head>
        <Script
          defer
          src="https://analytics.moonforge.co/script.js"
          data-website-id="047438c5-a904-4bdf-b855-606d24dffc0c"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
