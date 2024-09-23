import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

// Import des polices locales avec `next/font/local`
const GeistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const GeistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Hatton Paul-Adrien . Développeur web",
  description: "Développeur web en React, Next.js et TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable, // Utilisation des polices locales
          AnekTelugu.variable,
          GeistMono.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}

    // "build": "next build",
    // "export": "next export",
    // "deploy": "next build && gh-pages -d out"