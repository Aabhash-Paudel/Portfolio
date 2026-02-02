"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [phase, setPhase] = useState<'typing' | 'pause' | 'fade'>('typing')
  const fullText = 'Aabhash'

  // Typing animation
  useEffect(() => {
    if (phase !== 'typing') return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setPhase('pause')
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [phase])

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  // Pause then fade
  useEffect(() => {
    if (phase === 'pause') {
      const timer = setTimeout(() => {
        setPhase('fade')
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [phase])

  // Complete after fade
  useEffect(() => {
    if (phase === 'fade') {
      const timer = setTimeout(() => {
        onComplete()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  return (
    <AnimatePresence>
      {phase !== 'fade' ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[200] bg-zinc-950 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Terminal-style container */}
          <div className="relative">
            {/* Code editor style frame */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-8 md:p-12 shadow-2xl">
              {/* Fake terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-zinc-500 text-xs font-mono">portfolio.tsx</span>
              </div>

              {/* Code content */}
              <div className="font-mono text-sm md:text-base">
                <div className="flex items-center gap-2 text-zinc-500 mb-2">
                  <span className="text-zinc-600 select-none">1</span>
                  <span className="text-purple-400">const</span>
                  <span className="text-zinc-300">developer</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-zinc-500">{'{'}</span>
                </div>
                
                <div className="flex items-center gap-2 text-zinc-500 mb-2 pl-6">
                  <span className="text-zinc-600 select-none">2</span>
                  <span className="text-zinc-400">name:</span>
                  <span className="text-green-400">{'"'}</span>
                  <motion.span 
                    className="text-green-400 text-2xl md:text-4xl font-bold"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                  >
                    {displayText}
                  </motion.span>
                  <span 
                    className={`text-green-400 text-2xl md:text-4xl font-bold transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                  >
                    |
                  </span>
                  <span className="text-green-400">{'"'}</span>
                  <span className="text-zinc-500">,</span>
                </div>

                <div className="flex items-center gap-2 text-zinc-500 mb-2 pl-6">
                  <span className="text-zinc-600 select-none">3</span>
                  <span className="text-zinc-400">role:</span>
                  <span className="text-green-400">{'"Cybersecurity Engineer"'}</span>
                  <span className="text-zinc-500">,</span>
                </div>

                <div className="flex items-center gap-2 text-zinc-500 mb-2 pl-6">
                  <span className="text-zinc-600 select-none">4</span>
                  <span className="text-zinc-400">status:</span>
                  <span className="text-yellow-400">{'"loading..."'}</span>
                </div>

                <div className="flex items-center gap-2 text-zinc-500">
                  <span className="text-zinc-600 select-none">5</span>
                  <span className="text-zinc-500">{'}'}</span>
                  <span className="text-zinc-500">;</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-zinc-600 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
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
