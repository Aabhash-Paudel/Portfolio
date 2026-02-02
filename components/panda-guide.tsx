"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

const dialogues = [
    "This is my portfolio.",
    "Scroll down.",
    "Let me show you something cool.",
    "I guard the code.",
    "Check out the projects."
]

export function PandaGuide() {
    const [mounted, setMounted] = useState(false)
    const [tooltip, setTooltip] = useState("")
    const [showTooltip, setShowTooltip] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Cycle tooltips occasionally
        const interval = setInterval(() => {
            if (Math.random() > 0.6) {
                const text = dialogues[Math.floor(Math.random() * dialogues.length)]
                setTooltip(text)
                setShowTooltip(true)
                setTimeout(() => setShowTooltip(false), 3000)
            }
        }, 8000)

        return () => clearInterval(interval)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed bottom-0 left-4 z-40 hidden md:block pointer-events-none">
            {/* Tooltip Bubble */}
            <div
                className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-mono whitespace-nowrap transition-all duration-300 transform ${showTooltip ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                    }`}
            >
                {tooltip}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-b border-r border-zinc-700 rotate-45" />
            </div>

            {/* Panda Image with Idle Animation */}
            <div className="relative w-64 h-64 animate-breathe origin-bottom">
                <Image
                    src="/assets/panda-idle.png"
                    alt="Panda Guide"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                />
            </div>
        </div>
    )
}
