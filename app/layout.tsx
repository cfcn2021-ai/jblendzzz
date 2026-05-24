import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jblendzzz | Mobile Barber — Antique & Aklan",
  description:
    "Sharp cuts delivered to your door. Home-service barber serving Antique & Aklan. Book online — fades, designs, kid's cuts.",
  openGraph: {
    title: "Jblendzzz | Mobile Barber — Antique & Aklan",
    description: "Sharp cuts delivered to your door. Book online.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink text-ivory">{children}</body>
    </html>
  );
}
