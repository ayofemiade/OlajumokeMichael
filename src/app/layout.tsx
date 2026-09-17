import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { BlueprintGrid } from "@/components/layout/BlueprintGrid";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olajumoke Michael | Strategist",
  description: "Turning abstract concepts into concrete structures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink selection:bg-plum/20">
        <BlueprintGrid />
        <Header />
        <main className="flex-grow flex flex-col relative z-10">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
