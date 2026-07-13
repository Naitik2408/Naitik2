import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naitik | Tech Partner & Business Problem Solver",
  description: "I'm Naitik Kumar. I help businesses overcome challenges and drive growth through custom software, web platforms, and digital solutions.",
  keywords: ["Software Developer", "Tech Partner", "Business Solutions", "Web Development", "Naitik Kumar", "Portfolio"],
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans text-gray-900 bg-[#fbfbfb]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
