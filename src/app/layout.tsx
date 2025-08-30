import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SuperSumo - Modern Software Solutions",
  description: "Leading webapp development company providing School ERP, Smart Bus, Sumo Kids, and comprehensive business management solutions with Sumo360.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
