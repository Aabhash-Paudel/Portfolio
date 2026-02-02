"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

// SVG for small web threads behind each letter
function WebThread({ delay }: { delay: number }) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 0.6, 0.3], scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {/* Radial web threads */}
      <line x1="50" y1="50" x2="50" y2="0" stroke="rgba(161,161,170,0.4)" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="100" y2="25" stroke="rgba(161,161,170,0.3)" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="100" y2="75" stroke="rgba(161,161,170,0.3)" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="50" y2="100" stroke="rgba(161,161,170,0.4)" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="0" y2="75" stroke="rgba(161,161,170,0.3)" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="0" y2="25" stroke="rgba(161,161,170,0.3)" strokeWidth="0.5" />
      {/* Circular threads */}
      <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(161,161,170,0.2)" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(161,161,170,0.15)" strokeWidth="0.5" />
    </motion.svg>
  )
}

// Big spiderweb splash SVG
function SpiderWebSplash() {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 400"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Center point */}
      <circle cx="400" cy="200" r="3" fill="rgba(161,161,170,0.8)" />
      
      {/* Main radial threads - 12 directions */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x2 = 400 + Math.cos(angle) * 380
        const y2 = 200 + Math.sin(angle) * 180
        return (
          <motion.line
            key={`radial-${i}`}
            x1="400"
            y1="200"
            x2={x2}
            y2={y2}
            stroke="rgba(161,161,170,0.5)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          />
        )
      })}
      
      {/* Spiral rings */}
      {[40, 80, 120, 160, 200, 250, 300, 350].map((r, ringIndex) => (
        <motion.ellipse
          key={`ring-${ringIndex}`}
          cx="400"
          cy="200"
          rx={r * 1.8}
          ry={r * 0.85}
          fill="none"
          stroke="rgba(161,161,170,0.3)"
          strokeWidth="0.8"
          strokeDasharray="8 4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.08 * ringIndex }}
        />
      ))}
      
      {/* Corner web extensions */}
      <motion.path
        d="M 0 0 Q 100 100 400 200"
        fill="none"
        stroke="rgba(161,161,170,0.25)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <motion.path
        d="M 800 0 Q 700 100 400 200"
        fill="none"
        stroke="rgba(161,161,170,0.25)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      />
      <motion.path
        d="M 0 400 Q 100 300 400 200"
        fill="none"
        stroke="rgba(161,161,170,0.25)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <motion.path
        d="M 800 400 Q 700 300 400 200"
        fill="none"
        stroke="rgba(161,161,170,0.25)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      />
    </motion.svg>
  )
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visibleLetters, setVisibleLetters] = useState(0)
  const [showSplash, setShowSplash] = useState(false)
  const [phase, setPhase] = useState<'letters' | 'splash' | 'fade'>('letters')
  const letters = 'AABHASH'.split('')

  // Letter reveal animation
  useEffect(() => {
    if (phase !== 'letters') return

    const letterInterval = setInterval(() => {
      setVisibleLetters(prev => {
        if (prev < letters.length) {
          return prev + 1
        } else {
          clearInterval(letterInterval)
          // Small delay before splash
          setTimeout(() => {
            setShowSplash(true)
            setPhase('splash')
          }, 300)
          return prev
        }
      })
    }, 250)

    return () => clearInterval(letterInterval)
  }, [phase, letters.length])

  // Splash to fade transition
  useEffect(() => {
    if (phase === 'splash') {
      const timer = setTimeout(() => {
        setPhase('fade')
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [phase])

  // Complete after fade
  useEffect(() => {
    if (phase === 'fade') {
      const timer = setTimeout(() => {
        onComplete()
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  return (
    <AnimatePresence>
      {phase !== 'fade' ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[200] bg-zinc-950 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background web pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="webPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(161,161,170,0.3)" strokeWidth="0.2" />
                <line x1="0" y1="10" x2="20" y2="10" stroke="rgba(161,161,170,0.3)" strokeWidth="0.2" />
                <line x1="0" y1="0" x2="20" y2="20" stroke="rgba(161,161,170,0.15)" strokeWidth="0.2" />
                <line x1="20" y1="0" x2="0" y2="20" stroke="rgba(161,161,170,0.15)" strokeWidth="0.2" />
              </pattern>
              <rect width="100" height="100" fill="url(#webPattern)" />
            </svg>
          </div>

          {/* Main content container */}
          <div className="relative">
            {/* Spiderweb splash overlay */}
            {showSplash && (
              <div className="absolute -inset-32 md:-inset-48">
                <SpiderWebSplash />
              </div>
            )}

            {/* Letters container */}
            <div className="relative flex items-center justify-center gap-1 md:gap-2">
              {letters.map((letter, index) => (
                <div key={index} className="relative">
                  {/* Web thread behind letter */}
                  {index < visibleLetters && (
                    <div className="absolute -inset-4 md:-inset-6">
                      <WebThread delay={index * 0.1} />
                    </div>
                  )}
                  
                  {/* The letter */}
                  <motion.span
                    className="relative z-10 text-5xl md:text-8xl lg:text-9xl font-black text-white select-none"
                    style={{ 
                      textShadow: index < visibleLetters 
                        ? '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.1)' 
                        : 'none'
                    }}
                    initial={{ opacity: 0, y: -50, scale: 0.5, rotateX: 90 }}
                    animate={index < visibleLetters ? { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1, 
                      rotateX: 0,
                    } : {}}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.34, 1.56, 0.64, 1],
                      delay: 0.05
                    }}
                  >
                    {letter}
                  </motion.span>

                  {/* Thread coming down from top */}
                  {index < visibleLetters && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-zinc-500 to-transparent"
                      style={{ top: '-100vh', height: '100vh' }}
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Subtitle that appears after splash */}
            {showSplash && (
              <motion.p
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-zinc-500 font-mono text-sm tracking-widest whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                CYBERSECURITY ENGINEER
              </motion.p>
            )}
          </div>

          {/* Animated corner webs */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 0 0 L 100 100 M 0 25 L 75 100 M 0 50 L 50 100 M 0 75 L 25 100 M 25 0 L 100 75 M 50 0 L 100 50 M 75 0 L 100 25" 
                stroke="rgba(161,161,170,0.4)" strokeWidth="0.5" fill="none" />
              <path d="M 0 0 Q 50 20 100 100 M 0 0 Q 20 50 100 100" 
                stroke="rgba(161,161,170,0.3)" strokeWidth="0.5" fill="none" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 rotate-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 0 0 L 100 100 M 0 25 L 75 100 M 0 50 L 50 100 M 0 75 L 25 100 M 25 0 L 100 75 M 50 0 L 100 50 M 75 0 L 100 25" 
                stroke="rgba(161,161,170,0.4)" strokeWidth="0.5" fill="none" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 -rotate-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 0 0 L 100 100 M 0 25 L 75 100 M 0 50 L 50 100 M 0 75 L 25 100 M 25 0 L 100 75 M 50 0 L 100 50 M 75 0 L 100 25" 
                stroke="rgba(161,161,170,0.4)" strokeWidth="0.5" fill="none" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 rotate-180"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 0 0 L 100 100 M 0 25 L 75 100 M 0 50 L 50 100 M 0 75 L 25 100 M 25 0 L 100 75 M 50 0 L 100 50 M 75 0 L 100 25" 
                stroke="rgba(161,161,170,0.4)" strokeWidth="0.5" fill="none" />
            </svg>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="loading-fade"
          className="fixed inset-0 z-[200] bg-zinc-950"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      )}
    </AnimatePresence>
  )
}
