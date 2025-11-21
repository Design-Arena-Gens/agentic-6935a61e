import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kling | Real-Time Polyglot Intelligence",
  description:
    "Kling orchestrates adaptive, real-time communication intelligence so your global teams sound native everywhere.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} scroll-smooth bg-midnight text-white`}
    >
      <body className="min-h-screen bg-midnight font-body antialiased">{children}</body>
    </html>
  );
}
