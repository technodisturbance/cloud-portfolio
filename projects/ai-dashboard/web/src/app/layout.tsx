import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'AI Dashboard',
    template: '%s | AI Dashboard',
  },
  description: 'A modern AI-powered dashboard for data analytics and insights',
  keywords: ['AI', 'Dashboard', 'Analytics', 'Next.js', 'TypeScript'],
  authors: [{ name: 'AI Dashboard Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'AI Dashboard',
    description: 'A modern AI-powered dashboard for data analytics and insights',
    siteName: 'AI Dashboard',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Dashboard',
    description: 'A modern AI-powered dashboard for data analytics and insights',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
