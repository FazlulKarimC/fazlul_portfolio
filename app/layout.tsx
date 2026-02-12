import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fazlul Karim | Full Stack Developer",
  description:
    "Portfolio of Fazlul Karim - Full Stack Developer specializing in modern web applications with React, Next.js, and Node.js",
  keywords: [
    "Fazlul Karim",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Fazlul Karim Choudhury" }],
  openGraph: {
    title: "Fazlul Karim | Full Stack Developer",
    description:
      "Portfolio of Fazlul Karim - Full Stack Developer specializing in modern web applications with React, Next.js, and Node.js",
    type: "website",
    locale: "en_US",
    siteName: "Fazlul Karim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fazlul Karim | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and Node.js",
    creator: "@FazlulKarim_fk",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
