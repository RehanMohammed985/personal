import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Rehan Mohammed - AI Researcher & CS Student',
  description: 'Personal portfolio of Rehan Mohammed, a rising sophomore CS student at NC State University, AI researcher, and tech enthusiast.',
  keywords: ['AI', 'Machine Learning', 'Computer Science', 'NC State', 'Research', 'Portfolio'],
  authors: [{ name: 'Rehan Mohammed' }],
  creator: 'Rehan Mohammed',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Rehan Mohammed - AI Researcher & CS Student',
    description: 'Personal portfolio of Rehan Mohammed, a rising sophomore CS student at NC State University, AI researcher, and tech enthusiast.',
    url: 'https://rehanmohammed.com',
    siteName: 'Rehan Mohammed Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rehan Mohammed - AI Researcher & CS Student',
    description: 'Personal portfolio of Rehan Mohammed, a rising sophomore CS student at NC State University, AI researcher, and tech enthusiast.',
    creator: '@rehan_m0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 