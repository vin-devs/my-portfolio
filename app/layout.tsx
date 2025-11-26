import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vincent Mutuku - Full Stack Developer",
  description: "Portfolio of Vincent Mutuku - Full Stack Developer specializing in modern web technologies",
  generator: "v0.app",
  keywords: ["Vincent Mutuku", "Full Stack Developer", "React", "Next.js", "JavaScript", "Portfolio"],
  authors: [{ name: "Vincent Mutuku" }],
  openGraph: {
    title: "Vincent Mutuku - Full Stack Developer",
    description: "Portfolio of Vincent Mutuku - Full Stack Developer specializing in modern web technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Mutuku - Full Stack Developer",
    description: "Portfolio of Vincent Mutuku - Full Stack Developer specializing in modern web technologies",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
