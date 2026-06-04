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

export const metadataBase = new URL("https://mayankchoradia.in");

export const metadata: Metadata = {
  title: "Mayank Choradia | Full-Stack Developer & Competitive Programmer",
  description:
    "Portfolio of Mayank Choradia, showcasing full-stack web applications, algorithmic problem-solving",
  metadataBase: metadataBase,
  openGraph: {
    title: "Mayank Choradia | Full-Stack Developer & Competitive Programmer",
    description:
      "Explore my projects, core engineering skills, and technical background.",
    url: "https://mayankchoradia.in",
    siteName: "Mayank Choradia Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mayank Choradia – Full-Stack Developer & Competitive Programmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Choradia | Full-Stack Developer & Competitive Programmer",
    description:
      "Explore my projects, core engineering skills, and technical background.",
    images: ["/og-image.png"],
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
