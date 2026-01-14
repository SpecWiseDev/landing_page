import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
