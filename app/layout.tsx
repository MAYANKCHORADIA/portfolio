import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayank Choradia | Full-Stack Developer & Competitive Programmer",
  description: "Portfolio of Mayank Choradia, showcasing full-stack web applications, algorithmic problem-solving",
  openGraph: {
    title: "Mayank Choradia | Full-Stack Developer & Competitive Programmer",
    description: "Explore my projects, core engineering skills, and technical background.",
    type: "website"
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
