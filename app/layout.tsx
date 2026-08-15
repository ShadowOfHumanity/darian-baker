import type { Metadata } from "next";
import { Geist_Mono, Manrope, Newsreader } from "next/font/google";
import { BakeThereProvider } from "@/components/ui/BakeThereProvider";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darian Baker — Backend Software Developer",
  description:
    "Backend Software Developer in Malta building production services, internal platforms, and developer tools with C# and .NET.",
  openGraph: {
    title: "Darian Baker — Backend Software Developer",
    description:
      "Backend Software Developer in Malta building production services, internal platforms, and developer tools with C# and .NET.",
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
        className={`${newsreader.variable} ${manrope.variable} ${geistMono.variable}`}
      >
        <BakeThereProvider defaultTheme="warm">{children}</BakeThereProvider>
      </body>
    </html>
  );
}
