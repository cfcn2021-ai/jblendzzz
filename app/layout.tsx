import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
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
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
