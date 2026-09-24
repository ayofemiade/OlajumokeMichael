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

const baseUrl = "https://olajumokemichael.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Olajumoke Michael | Strategist & Program Architect",
    template: "%s | Olajumoke Michael",
  },
  description:
    "Connecting program strategy with implementation, operations and evidence to move complex initiatives forward.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Olajumoke Michael | Strategist & Program Architect",
    description:
      "Connecting program strategy with implementation, operations and evidence to move complex initiatives forward.",
    url: baseUrl,
    siteName: "Olajumoke Michael",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/Olajumoke-Michael-Professional-Headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Olajumoke Michael",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olajumoke Michael | Strategist & Program Architect",
    description:
      "Connecting program strategy with implementation, operations and evidence to move complex initiatives forward.",
    images: ["/images/Olajumoke-Michael-Professional-Headshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink selection:bg-plum/20">
        {/* Skip to Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-plum focus:text-white focus:font-sans focus:text-sm focus:font-semibold focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <BlueprintGrid />
        <Header />
        <main id="main-content" className="flex-grow flex flex-col relative z-10">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
