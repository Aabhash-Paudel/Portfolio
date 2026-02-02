"use client"

import { CastleIllustration, TreeIllustration, HorseIllustration, MedievalHouseIllustration } from '@/components/medieval-illustrations'

export function Footer() {
  return (
    <footer className="py-16 bg-parchment relative overflow-hidden">
      {/* Medieval landscape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between pointer-events-none">
        <div className="flex items-end">
          <TreeIllustration className="w-10 h-16 opacity-25" />
          <CastleIllustration className="w-28 h-24 -ml-2 opacity-20" />
          <TreeIllustration className="w-8 h-14 -ml-1 opacity-20" />
        </div>
        
        <div className="flex items-end">
          <TreeIllustration className="w-8 h-12 opacity-20" />
          <MedievalHouseIllustration className="w-16 h-20 -ml-1 opacity-20" />
          <HorseIllustration className="w-20 h-14 -ml-1 opacity-15" flip />
          <TreeIllustration className="w-10 h-16 -ml-2 opacity-25" />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Seal */}
        <div className="mb-8">
          <svg 
            className="w-16 h-16 mx-auto text-gold/60" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="38" />
            <path d="M50 20 L50 80 M20 50 L80 50" />
            <path d="M50 30 L60 50 L50 70 L40 50 Z" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        {/* Contact Links */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <a 
            href="mailto:aabhashpaudel01@gmail.com" 
            className="font-sans text-muted-foreground hover:text-ink transition-colors duration-300"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
          
          <a 
            href="https://github.com/Aabhash-Paudel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-sans text-muted-foreground hover:text-ink transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
          </a>
          
          <a 
            href="https://linkedin.com/in/aabhash-paudel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-sans text-muted-foreground hover:text-ink transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Colophon */}
        <p className="font-sans text-sm text-muted-foreground">
          Crafted with discipline &bull; Banguluru, India
        </p>
        <p className="font-sans text-xs text-muted-foreground/60 mt-2">
          &copy; {new Date().getFullYear()} Aabhash Paudel
        </p>
      </div>
    </footer>
  )
}
