"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const DustParticles = dynamic(
  () => import('@/components/dust-particles').then(mod => mod.DustParticles),
  { ssr: false }
)

// Decorative medieval elements
const CastleIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="10" y="50" width="100" height="50" fill="#ECE6DA" stroke="#8B7355" />
    <rect x="20" y="30" width="20" height="70" fill="#ECE6DA" stroke="#8B7355" />
    <rect x="80" y="30" width="20" height="70" fill="#ECE6DA" stroke="#8B7355" />
    <rect x="45" y="40" width="30" height="60" fill="#ECE6DA" stroke="#8B7355" />
    <rect x="25" y="20" width="10" height="10" stroke="#8B7355" />
    <rect x="85" y="20" width="10" height="10" stroke="#8B7355" />
    <path d="M50 70h20v30H50z" fill="#6E3B3B" opacity="0.3" />
    <rect x="55" y="50" width="4" height="8" fill="#B59A5A" opacity="0.5" />
    <rect x="65" y="50" width="4" height="8" fill="#B59A5A" opacity="0.5" />
  </svg>
)

const TreeIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 60" fill="none">
    <rect x="17" y="40" width="6" height="20" fill="#8B7355" />
    <ellipse cx="20" cy="25" rx="18" ry="25" fill="#7A8F7A" opacity="0.6" />
    <ellipse cx="15" cy="20" rx="10" ry="15" fill="#5C6B5C" opacity="0.4" />
  </svg>
)

const HorseIllustration = ({ className = "", flip = false }: { className?: string, flip?: boolean }) => (
  <svg 
    className={className} 
    viewBox="0 0 80 50" 
    fill="none" 
    stroke="#8B7355"
    strokeWidth="1"
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
  >
    <ellipse cx="40" cy="30" rx="25" ry="15" fill="#D4CFC4" />
    <ellipse cx="15" cy="28" rx="8" ry="10" fill="#D4CFC4" />
    <path d="M10 18 Q5 10 8 5 Q12 8 15 15" fill="#8B7355" opacity="0.5" />
    <ellipse cx="12" cy="26" rx="2" ry="3" fill="#2B2B2B" />
    <path d="M25 40 L22 55 M35 42 L33 55 M50 42 L52 55 M58 40 L60 55" strokeWidth="2" />
    <path d="M60 25 Q75 20 70 35" fill="none" stroke="#8B7355" strokeWidth="1.5" />
  </svg>
)

const ShieldDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 50" fill="none">
    <path d="M20 5 L35 12 L35 30 L20 45 L5 30 L5 12 Z" stroke="#B59A5A" strokeWidth="1" fill="#ECE6DA" />
    <path d="M20 12 L20 38" stroke="#B59A5A" strokeWidth="0.5" opacity="0.5" />
    <path d="M10 20 L30 20" stroke="#B59A5A" strokeWidth="0.5" opacity="0.5" />
    <circle cx="20" cy="20" r="3" fill="#6E3B3B" opacity="0.4" />
  </svg>
)

const SwordDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 60" fill="none" stroke="#B59A5A" strokeWidth="1">
    <path d="M10 0 L10 45" />
    <path d="M5 45 L15 45" />
    <path d="M8 45 L8 52 L12 52 L12 45" />
    <path d="M10 52 L10 58" />
    <path d="M7 5 L10 0 L13 5" fill="#B59A5A" opacity="0.3" />
  </svg>
)

const FlowerDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="15" r="3" fill="#B59A5A" opacity="0.6" />
    <ellipse cx="15" cy="7" rx="3" ry="5" fill="#7A8F7A" opacity="0.4" />
    <ellipse cx="15" cy="23" rx="3" ry="5" fill="#7A8F7A" opacity="0.4" />
    <ellipse cx="7" cy="15" rx="5" ry="3" fill="#7A8F7A" opacity="0.4" />
    <ellipse cx="23" cy="15" rx="5" ry="3" fill="#7A8F7A" opacity="0.4" />
  </svg>
)

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center paper-texture bg-parchment overflow-hidden">
      <DustParticles />
      
      {/* Floating decorative elements with magic animations */}
      <ShieldDecor className="absolute top-20 left-8 w-10 h-12 md:w-14 md:h-16 opacity-20 animate-float" />
      <SwordDecor className="absolute top-32 right-12 w-5 h-14 md:w-6 md:h-16 opacity-15 animate-float" style={{ animationDelay: '1s' }} />
      <FlowerDecor className="absolute top-48 left-1/4 w-8 h-8 animate-float" style={{ animationDelay: '2s' }} />
      <FlowerDecor className="absolute top-36 right-1/4 w-6 h-6 animate-float" style={{ animationDelay: '3s' }} />
      <SwordDecor className="absolute bottom-40 left-16 w-5 h-14 opacity-10 animate-float rotate-12" style={{ animationDelay: '1.5s' }} />
      
      {/* Medieval landscape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 flex items-end">
          <TreeIllustration className="w-16 h-24 md:w-24 md:h-36 opacity-50" />
          <CastleIllustration className="w-32 h-28 md:w-48 md:h-44 -ml-4 opacity-40" />
          <TreeIllustration className="w-12 h-20 md:w-20 md:h-28 -ml-2 opacity-40" />
        </div>
        
        <div className="absolute bottom-0 right-0 flex items-end">
          <TreeIllustration className="w-14 h-22 md:w-20 md:h-32 opacity-40" />
          <HorseIllustration className="w-20 h-14 md:w-32 md:h-22 -ml-2 opacity-30" flip />
          <TreeIllustration className="w-10 h-16 md:w-16 md:h-24 opacity-35" />
        </div>
        
        <div className="h-2 bg-gradient-to-t from-[#8B7355]/10 to-transparent" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-ink tracking-wide mb-6">
            Aabhash Paudel
          </h1>
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-sans text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-8">
            Cybersecurity Engineer
          </p>
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`gold-divider w-48 mx-auto mb-8 ${isVisible ? 'animate-draw-line' : ''}`} style={{ animationDelay: '0.8s' }} />
          
          <p className="font-serif text-xl md:text-2xl text-ink/80 italic tracking-wide">
            Observation &bull; Discipline &bull; Defense
          </p>
        </div>
        
        {/* Guided path indicator */}
        <div 
          className={`transition-all duration-1000 delay-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href="#about" 
            className="group inline-flex flex-col items-center mt-16 text-muted-foreground hover:text-ink transition-colors duration-500"
            aria-label="Begin with The Codex"
          >
            <span className="font-serif text-sm italic mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
              Begin with The Codex
            </span>
            <svg 
              className="w-6 h-6 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
