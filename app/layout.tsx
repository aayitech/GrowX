import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "GrowX | Sell More. Grow Faster.",
  description:
    "GrowX helps ecommerce sellers grow across Amazon, TikTok Shop, and Wayfair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}