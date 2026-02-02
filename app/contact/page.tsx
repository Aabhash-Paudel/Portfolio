"use client"

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { MedievalFrame } from '@/components/medieval-decorations'

const contactLinks = [
  {
    label: 'Email',
    value: 'aabhashpaudel01@gmail.com',
    href: 'mailto:aabhashpaudel01@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    )
  },
  {
    label: 'GitHub',
    value: 'github.com/Aabhash-Paudel',
    href: 'https://github.com/Aabhash-Paudel',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/aabhash-paudel',
    href: 'https://linkedin.com/in/aabhash-paudel',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    label: 'Resume',
    value: 'View / Download PDF',
    href: '/assets/resume.pdf',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    )
  }
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative min-h-screen">
      <Navigation />

      <section id="contact" className="relative min-h-screen pt-24 pb-16 flex items-center">
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 w-full">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-zinc-400 mb-4 font-semibold">
              // CONTACT
            </p>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <div className="w-24 h-px bg-zinc-600 mx-auto mb-6" />
            <p className="font-sans text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Available for security consulting, penetration testing engagements, and full-time opportunities.
            </p>
          </div>

          {/* Contact Links */}
          <div
            className={`space-y-4 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {contactLinks.map((link, index) => (
              <MedievalFrame className="p-0 border-none bg-transparent" key={link.label}>
                <a
                  href={link.label === 'Email' ? 'mailto:aabhashpaudel01@gmail.com' : link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="group flex items-center gap-5 p-5 md:p-6 bg-zinc-900/80 border border-zinc-700 rounded-xl hover:border-zinc-500 hover:bg-zinc-800/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-[1.02]"
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="text-zinc-400 group-hover:text-white transition-colors duration-300">
                    <div className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full">
                      {link.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-xs uppercase text-zinc-400 mb-1 font-semibold tracking-wider">
                      {link.label}
                    </p>
                    <p className="font-sans text-base md:text-lg text-zinc-200 group-hover:text-white transition-colors duration-300 font-medium truncate">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </MedievalFrame>
            ))}
          </div>

          {/* Footer */}
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="w-16 h-px bg-zinc-700 mx-auto mb-6" />
            <p className="font-sans text-sm text-zinc-400">
              Bangalore, India
            </p>
            <p className="font-mono text-xs text-zinc-500 mt-2">
              &copy; {new Date().getFullYear()} Aabhash Paudel
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
