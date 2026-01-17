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
  title: "Darian Baker | Fullstack Developer",
  description: "Fullstack Software Developer from Malta specializing in React, Next.js, .NET, and modern web technologies. Available for exciting opportunities.",
  keywords: ["Fullstack Developer", "React", "Next.js", ".NET", "Malta", "Software Developer"],
  authors: [{ name: "Darian Baker" }],
  openGraph: {
    title: "Darian Baker | Fullstack Developer",
    description: "Fullstack Software Developer from Malta",
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
