import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  title: "David Ogik - Frontend Developer",
  description:
    "Mid-level frontend developer with 4+ years of experience specializing in React, Next.js, and Tailwind CSS. Based in Kenya, building performant and accessible web applications.",
  openGraph: {
    title: "David Ogik - Frontend Developer",
    description:
      "Mid-level frontend developer with 4+ years of experience specializing in React, Next.js, and Tailwind CSS.",
    url: "https://david-ogik-portfolio-jjvb.vercel.app",
    siteName: "David Ogik Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Ogik - Frontend Developer",
    description:
      "Mid-level frontend developer with 4+ years of experience specializing in React, Next.js, and Tailwind CSS.",
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
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
