import type React from "react";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

// 1. Unified Metadata for the Architect Brand
export const metadata: Metadata = {
  title: {
    default: "Vincent Mutuku | Full Stack Solutions Architect",
    template: "%s | Vincent Mutuku",
  },
  description:
    "Architecting high-performance web ecosystems. Specialist in Next.js 15, React 19, and Cloud Solutions (AWS, Stripe, M-Pesa).",
  generator: "Next.js 15",
  keywords: [
    "Vincent Mutuku",
    "Solutions Architect",
    "Full Stack Developer",
    "React 19 Expert",
    "Next.js 15",
    "MERN Stack Architect",
    "Cloud Architecture Kenya",
  ],
  authors: [{ name: "Vincent Mutuku" }],
  creator: "Vincent Mutuku",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: " https://vincentmutuku.netlify.app/", // Update with your actual domain
    title: "Vincent Mutuku | Full Stack Solutions Architect",
    description:
      "Designing and building the future of web with architectural precision.",
    siteName: "Vincent Mutuku Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Mutuku | Full Stack Solutions Architect",
    description:
      "High-performance full-stack realities from architectural visions.",
    creator: "@vin_devs", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 2. Separate Viewport Export (Next.js 15 standard)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased selection:bg-primary/30`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* The main container often benefits from a relative positioning context */}
            <main className="relative min-h-screen flex flex-col">
              {children}
            </main>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
