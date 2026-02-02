"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useTransitionContext } from './transition-context'

export function CurtainTransition() {
    const { setIsTransitioning, isPageTransitionActive } = useTransitionContext()
    const shouldReduceMotion = useReducedMotion()
    const [isPresent, setIsPresent] = useState(false)
    const hasAnimated = useRef(false)

    useEffect(() => {
        // Only trigger when page transition is active
        if (!isPageTransitionActive) return
        
        // Prevent double animation
        if (hasAnimated.current) return
        hasAnimated.current = true

        setIsTransitioning(true)
        setIsPresent(true)

        const sequence = async () => {
            // Wait for spider animation
            await new Promise(r => setTimeout(r, 1200))

            // Open curtain
            setIsPresent(false)

            // Cleanup after curtain is gone
            await new Promise(r => setTimeout(r, 1000))
            setIsTransitioning(false)
            hasAnimated.current = false
        }

        sequence()

    }, [isPageTransitionActive, setIsTransitioning])

    // Reduced motion: simple fade
    if (shouldReduceMotion) {
        return (
            <AnimatePresence>
                {isPresent && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black pointer-events-none"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                )}
            </AnimatePresence>
        )
    }

    return (
        <AnimatePresence mode="wait">
            {isPresent && (
                <SpiderCurtain key="curtain" />
            )}
        </AnimatePresence>
    )
}

function SpiderCurtain() {
    return (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col items-center justify-center">

            {/* Left Curtain Panel */}
            <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-zinc-950 z-20"
                initial={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
                {/* Web Texture - CSS Gradient */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_right_center,_transparent_0%,_#3f3f46_100%)]" />
                <div className="absolute right-0 top-0 bottom-0 w-px bg-zinc-800/50" />
            </motion.div>

            {/* Right Curtain Panel */}
            <motion.div
                className="absolute inset-y-0 right-0 w-1/2 bg-zinc-950 z-20"
                initial={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_left_center,_transparent_0%,_#3f3f46_100%)]" />
                <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800/50" />
            </motion.div>

            {/* Spider Animation Container */}
            <motion.div
                className="absolute z-30 flex flex-col items-center"
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{ y: "-100vh" }}
                transition={{
                    duration: 0.6,
                    ease: "backIn",
                    delay: 0.1
                }}
            >
                {/* Silk Thread (Only visible when climbing up) */}
                <motion.div
                    className="w-[1px] bg-zinc-600/50 absolute bottom-full left-1/2 -translate-x-1/2"
                    style={{ height: "100vh" }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                />

                {/* The Spider */}
                <SpiderAsset />

            </motion.div>
        </div>
    )
}

function SpiderAsset() {
    return (
        <div className="relative w-16 h-16 pointer-events-auto">
            {/* Simple CSS Spider Placeholder */}
            <motion.div
                className="w-4 h-6 bg-zinc-800 rounded-full relative z-10 mx-auto mt-4 shadow-2xl"
                initial={{ scale: 1 }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
            >
                {/* Legs */}
                {[...Array(8)].map((_, i) => (
                    <motion.div key={i}
                        className={`absolute top-1/2 left-1/2 w-8 h-[1px] bg-zinc-700 origin-left
                        ${i < 4 ? '-scale-x-100' : ''}`}
                        style={{
                            transform: `translate(-50%, -50%) rotate(${(i % 4) * 25 - 45}deg) translateX(50%)`
                        }}
                        animate={{
                            rotate: i === 0 || i === 4 ? [0, 15, 0] : 0 // Front legs cut
                        }}
                        transition={{ duration: 0.3, repeat: 3 }}
                    />
                ))}
            </motion.div>
        </div>
    )
}
