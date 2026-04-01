import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Tripma App",
  description: "Plan trips together, in real time.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Tripma App",
    description: "Plan trips together, in real time.",
    url: "https://tripma.app",
    siteName: "Tripma",
    images: [
      {
        url: "https://tripma.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tripma App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripma App",
    description: "Plan trips together, in real time.",
    images: ["https://tripma.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="bg-[#080c14] text-[#f0ece4] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}