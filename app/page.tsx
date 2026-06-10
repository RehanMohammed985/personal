'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'

function Artwork() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full animate-spin" style={{ animationDuration: '30s' }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 8" />
      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
      <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
      <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="200" y1="80" x2="200" y2="320" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <line x1="80" y1="200" x2="320" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <line x1="115" y1="115" x2="285" y2="285" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="285" y1="115" x2="115" y2="285" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="200" cy="200" r="6" fill="currentColor" opacity="1" />
      <circle cx="200" cy="80" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="200" cy="320" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="80" cy="200" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="320" cy="200" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="115" cy="115" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="285" cy="285" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="285" cy="115" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="115" cy="285" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.5" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 pb-6" style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
        {/* Hero */}
        <div className="relative flex flex-col lg:flex-row items-center" style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
          <div className="lg:pr-[416px]">
            <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4 sm:mb-6">
              I am Rehan Mohammed, currently majoring in Business and Computer Science at NC State. I solve high-stakes technical problems and build solutions that scale.
            </p>
            <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-10">
              I am a firm believer that obsession, when directed with purpose, can turn impossible goals into achievable ones. Great success often starts with an obsession to improve, create, or achieve.
            </p>
            <div className="flex items-center gap-5 sm:gap-7">
              <a href="https://github.com/RehanMohammed985" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-60 transition-opacity">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com/in/rehan-mohammed-237bab273/" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-60 transition-opacity">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="https://x.com/rehan_m0" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-60 transition-opacity">
                <Twitter className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="block lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 mt-8 lg:mt-0 shrink-0">
            <Artwork />
          </div>
        </div>

        <footer className="pt-6">
          <p className="text-black text-xs">&copy; {new Date().getFullYear()} Rehan Mohammed</p>
        </footer>
      </div>
    </>
  )
}
