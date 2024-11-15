import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ' Welcome to शिक्षा महाकुंभ and शिक्षा कुंभ। An initiative of DHE in collaboration with INIs to hold शिक्षा महाकुंभ annually and शिक्षा कुंभ half yearly.',
  description: ' Joint Conference ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
