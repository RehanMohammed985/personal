'use client'

import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function BlogClient() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 sm:p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95 transition-all duration-200 touch-manipulation"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 sm:w-5 sm:h-5" />
      ) : (
        <Moon className="w-5 h-5 sm:w-5 sm:h-5" />
      )}
    </button>
  )
}
