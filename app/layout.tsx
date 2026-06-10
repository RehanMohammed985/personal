import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Rehan Mohammed',
  description: 'CS @ NC State. AI researcher, builder, and curious mind.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-neutral-100">
      <body className={`${inter.className} bg-neutral-100 text-black min-h-screen antialiased`}>
        <Navbar />
        <main className="pt-14">
          {children}
        </main>
      </body>
    </html>
  )
}
