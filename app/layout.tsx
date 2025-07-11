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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>" />
        <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>" />
        <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>" />
        <link rel="icon" type="image/png" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 