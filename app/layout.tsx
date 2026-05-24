import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
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
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink text-ivory">{children}</body>
    </html>
  );
}
