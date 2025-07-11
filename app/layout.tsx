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
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
        <link rel="icon" href="data:image/png;base64,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" />
        <link rel="shortcut icon" href="data:image/png;base64,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" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 