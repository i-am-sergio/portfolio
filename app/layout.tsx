import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import FloatingCTAs from '@/components/FloatingCTAs';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",    
});

export const metadata: Metadata = {
  title: "Sergio's Portfolio",
  description: "Portfolio of a developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar scrollbar-track-primary scrollbar-thumb-accent">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition> 
          {children}
        </PageTransition>
        <FloatingCTAs /> 
      </body>
    </html>
  );
}
