"use client"

import React from "react"
import { useEffect, useState } from 'react'

// Sword SVG Component - Monochromatic
function Sword({ className = "", rotate = 0, scale = 1 }: { className?: string; rotate?: number; scale?: number }) {
  return (
    <svg
      viewBox="0 0 24 80"
      className={className}
      style={{ transform: `rotate(${rotate}deg) scale(${scale})` }}
    >
      {/* Blade */}
      <path
        d="M12 0 L14 40 L12 45 L10 40 Z"
        fill="url(#swordBlade)"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      {/* Fuller (groove) */}
      <line x1="12" y1="5" x2="12" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Cross-guard */}
      <rect x="4" y="44" width="16" height="4" rx="1" fill="currentColor" fillOpacity="0.8" />
      <rect x="5" y="45" width="14" height="2" rx="0.5" fill="white" opacity="0.2" />
      {/* Grip */}
      <rect x="9" y="48" width="6" height="16" rx="1" fill="currentColor" fillOpacity="0.9" />
      {/* Pommel */}
      <circle cx="12" cy="67" r="4" fill="currentColor" />
      <defs>
        <linearGradient id="swordBlade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Shield SVG Component - Monochromatic
function Shield({ className = "", variant = "default" }: { className?: string; variant?: "default" | "royal" | "dragon" }) {
  return (
    <svg viewBox="0 0 60 72" className={className}>
      {/* Shield body */}
      <path
        d="M30 2 L56 12 L56 36 Q56 56 30 70 Q4 56 4 36 L4 12 Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Inner border */}
      <path
        d="M30 8 L50 16 L50 35 Q50 52 30 64 Q10 52 10 35 L10 16 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Center emblem */}
      <circle cx="30" cy="36" r="8" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
}

// Spear SVG Component - Monochromatic
function Spear({ className = "", rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <svg
      viewBox="0 0 12 100"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Spear head */}
      <path
        d="M6 0 L10 20 L6 18 L2 20 Z"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      {/* Shaft */}
      <rect x="5" y="18" width="2" height="80" fill="currentColor" fillOpacity="0.8" />
    </svg>
  )
}

// Castle Tower SVG Component - Monochromatic
function CastleTower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className}>
      {/* Battlements */}
      <rect x="0" y="0" width="12" height="15" fill="currentColor" fillOpacity="0.8" />
      <rect x="16" y="0" width="12" height="15" fill="currentColor" fillOpacity="0.8" />
      <rect x="32" y="0" width="12" height="15" fill="currentColor" fillOpacity="0.8" />
      <rect x="48" y="0" width="12" height="15" fill="currentColor" fillOpacity="0.8" />
      {/* Tower body */}
      <rect x="4" y="15" width="52" height="85" fill="currentColor" fillOpacity="0.3" />
      {/* Window */}
      <rect x="22" y="30" width="16" height="24" rx="8" ry="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  )
}

// Cart SVG Component - Monochromatic
function Cart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 50" className={className}>
      {/* Cart body */}
      <path
        d="M10 15 L70 15 L65 35 L15 35 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Wheels */}
      <circle cx="20" cy="42" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="60" cy="42" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

// Decorative Frame Border - Mature Style with Medieval Animations
export function MedievalFrame({ children, className = "", title }: { children: React.ReactNode; className?: string; title?: string }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated corner accents */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-zinc-500/60 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-zinc-400" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-zinc-500/60 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-zinc-400" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-zinc-500/60 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-zinc-400" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-zinc-500/60 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-zinc-400" />

      {/* Subtle sword decoration with swing animation on hover */}
      <div className="absolute -top-6 -right-6 opacity-15 pointer-events-none hidden md:block transition-all duration-500 group-hover:opacity-30 group-hover:animate-medieval-swing">
        <Sword className="w-10 h-28 text-zinc-500" rotate={45} scale={0.5} />
      </div>

      {/* Frame border with glow effect on hover */}
      <div className="relative border border-zinc-700 bg-zinc-900/60 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 group-hover:border-zinc-600 group-hover:bg-zinc-900/80 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">

        {/* Header if title provided */}
        {title && (
          <div className="absolute -top-3 left-6 bg-zinc-900 border border-zinc-600 px-3 py-1 rounded text-xs font-mono text-zinc-300 uppercase tracking-wider transition-colors duration-300 group-hover:border-zinc-500 group-hover:text-zinc-200">
            {title}
          </div>
        )}

        {children}
      </div>
    </div>
  )
}

// Floating Medieval Elements - Subtle Background
export function MedievalDecorations() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle background elements in varied grays */}

      {/* Top left castle */}
      <div className="absolute top-20 left-4 opacity-[0.03] text-zinc-400">
        <CastleTower className="w-24 h-40" />
      </div>

      {/* Top right swords */}
      <div className="absolute top-32 right-8 opacity-[0.04] text-zinc-500">
        <Sword className="w-8 h-24" rotate={15} />
      </div>

      {/* Left side spears */}
      <div className="absolute top-1/3 left-6 opacity-[0.03] text-zinc-400">
        <Spear className="w-4 h-32" rotate={10} />
      </div>

      {/* Right side shields */}
      <div className="absolute top-1/2 right-6 opacity-[0.04] text-zinc-500">
        <Shield className="w-16 h-20" variant="royal" />
      </div>

      {/* Bottom right elements */}
      <div className="absolute bottom-32 right-1/4 opacity-[0.03] text-zinc-400">
        <Shield className="w-20 h-24" variant="dragon" />
      </div>

      {/* Floating swords - extremely subtle animation */}
      <div className="absolute top-1/4 right-1/3 animate-float opacity-[0.02] text-zinc-300">
        <Sword className="w-6 h-20" rotate={30} />
      </div>
    </div>
  )
}

export { Sword, Shield, Spear, CastleTower, Cart }
