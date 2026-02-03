"use client"

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { MedievalFrame } from '@/components/medieval-decorations'
import { TransitionLink } from '@/components/transition-link'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Main content */}
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-24 w-full max-w-[1920px] mx-auto">
          <MedievalFrame className="" title="Security Clearance: Level 5">
            <div
              className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                Aabhash Paudel
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <p className="font-mono text-sm md:text-base text-zinc-300 tracking-[0.3em] uppercase mb-8 font-semibold">
                Cybersecurity Engineer
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="w-16 h-px bg-zinc-700 mx-auto mb-8" />

              <p className="font-sans text-lg md:text-xl lg:text-2xl text-zinc-200 tracking-wide max-w-3xl mx-auto leading-relaxed font-medium">
                Observation &bull; Discipline &bull; Defense
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                <TransitionLink
                  href="/projects"
                  className="group relative px-8 py-3 bg-foreground text-background font-semibold text-sm tracking-wide rounded border border-foreground overflow-hidden transition-all duration-300 hover:tracking-widest"
                >
                  <span className="relative z-10">View Projects</span>
                </TransitionLink>
                <TransitionLink
                  href="/contact"
                  className="btn-slide px-8 py-3 border border-zinc-700 text-zinc-300 font-semibold text-sm tracking-wide rounded transition-all duration-300 hover:border-foreground"
                >
                  Get In Touch
                </TransitionLink>
              </div>
            </div>
          </MedievalFrame>

          {/* Scroll indicator */}
          <div
            className={`transition-all duration-1000 delay-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="mt-20">
              <TransitionLink
                href="/about"
                className="group inline-flex flex-col items-center text-zinc-600 hover:text-zinc-300 transition-colors duration-500"
                aria-label="Learn more about me"
              >
                <span className="font-mono text-xs mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                  click to explore
                </span>
                <svg
                  className="w-5 h-5 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
