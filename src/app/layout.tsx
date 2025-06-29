import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import FooterSection from "../components/FooterSection";
import { poppins } from "./fonts";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legal Monk",
  description: "A Blogs Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` ${poppins.className} ${geistMono.variable} pt-3 antialiased md:pt-5`}
      >
        <main className="mx-auto mb-8 max-w-screen-2xl px-5 lg:mb-20 2xl:px-32">
          <Navbar />
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
