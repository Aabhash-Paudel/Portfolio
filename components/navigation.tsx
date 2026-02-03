"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { TransitionLink } from './transition-link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'}
      `}
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Leftmost position */}
          <TransitionLink
            href="/"
            className="group flex items-center gap-2 font-sans text-xl font-bold relative tracking-tight transition-all duration-500 hover:text-white text-foreground"
          >
            <div className="relative w-8 h-8 mr-2">
              <img
                src="/assets/spider-red-eyes.png"
                alt="Spider Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="relative">
              <span className="text-xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">Aabhash Paudel</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </span>
          </TransitionLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <TransitionLink
                  key={item.label}
                  href={item.href}
                  className={`
                    relative font-sans text-sm font-semibold transition-all duration-300 group
                    ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}
                  `}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </TransitionLink>
              )
            })}

            {/* View Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-zinc-700 text-zinc-300 hover:border-white hover:text-white text-sm font-semibold rounded transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-400 hover:text-white p-2 relative"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              style={{ transform: isMobileOpen ? 'rotate(90deg)' : 'rotate(0)' }}
            >
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden bg-background border-t border-border overflow-hidden 
          transition-all duration-500 ease-out
          ${isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <TransitionLink
                key={item.label}
                href={item.href}
                className={`
                  block font-sans text-sm py-3 px-4 rounded
                  transition-all duration-300
                  ${isActive
                    ? 'text-white bg-zinc-900 font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                  }
                `}
                style={{
                  transitionDelay: isMobileOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMobileOpen ? 1 : 0
                }}
              >
                {item.label}
              </TransitionLink>
            )
          })}

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-sans text-sm py-3 px-4 mt-4 border border-zinc-700 text-zinc-300 text-center rounded hover:border-white hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
