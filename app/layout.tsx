import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson",
});

export const metadata: Metadata = {
  title: "Yicong Lin | AI Product Developer, Software Engineer & Software Architect",
  description: "Portfolio of Yicong Lin, a software developer with 20 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${atkinson.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-surface text-neutral-dark antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
