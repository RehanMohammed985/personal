'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-100 lg:bg-neutral-100/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-black font-bold text-sm sm:text-base lg:text-lg">
            Rehan Mohammed
          </Link>
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <Link key={item.href} href={item.href}>
                  <span className={`text-black text-sm sm:text-base lg:text-lg transition-opacity ${isActive ? 'underline decoration-1 underline-offset-4 decoration-black/50' : 'hover:underline hover:decoration-1 hover:underline-offset-4 hover:decoration-black/30'}`}>
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
