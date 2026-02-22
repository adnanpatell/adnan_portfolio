import React from "react"
import type { Metadata, Viewport } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Mohammed Adnan Patel | Full Stack Architect',
  description: 'Full Stack Architect specializing in Next.js, PostgreSQL, and AWS. Building scalable multi-tenant systems, real-time processing applications, and government-grade platforms. Expert in React, Node.js, Prisma ORM, and cloud deployments.',
  keywords: ['Full Stack Architect', 'Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Portfolio'],
  authors: [{ name: 'Mohammed Adnan Patel' }],
  openGraph: {
    title: 'Mohammed Adnan Patel | Full Stack Architect',
    description: 'Full Stack Architect specializing in Next.js, PostgreSQL, and AWS. Building scalable multi-tenant systems and real-time applications.',
    type: 'website',
  },
  // icons: {
  //   icon: [
  //     {
  //       url: '/icon-light-32x32.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '/icon-dark-32x32.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //     {
  //       url: '/icon.svg',
  //       type: 'image/svg+xml',
  //     },
  //   ],
  //   apple: '/apple-icon.png',
  // },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
