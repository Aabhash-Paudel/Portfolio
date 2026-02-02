"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Spider = {
    id: number
    x: number
    y: number
    rotation: number
    scale: number
    visible: boolean
    descending: boolean
}

export function LimitedSpiders() {
    const [spiders, setSpiders] = useState<Spider[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Initialize 6 spiders with random positions along edges
        const initialSpiders = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            x: Math.random() * 90 + 5, // 5% to 95% width
            y: Math.random() < 0.5 ? -10 : Math.random() * 20, // Mostly top or top area
            rotation: Math.random() * 30 - 15,
            scale: 0.5 + Math.random() * 0.3,
            visible: false,
            descending: false
        }))
        setSpiders(initialSpiders)

        // Spider behavior loop
        const behaviorInterval = setInterval(() => {
            setSpiders(prev => {
                // Count visible spiders
                const visibleCount = prev.filter(s => s.visible).length

                return prev.map(spider => {
                    // If hidden and we can show more (max 2), chaos check
                    if (!spider.visible && visibleCount < 2 && Math.random() > 0.8) {
                        return {
                            ...spider,
                            visible: true,
                            x: Math.random() * 90 + 5,
                            y: -10, // Reset to top
                            descending: true
                        }
                    }

                    // If descending, move down until a certain point then go back up or stay
                    if (spider.visible && spider.descending) {
                        const newY = spider.y + 0.5
                        if (newY > 20 + Math.random() * 20) { // Drop max 20-40% down
                            return { ...spider, descending: false }
                        }
                        return { ...spider, y: newY }
                    }

                    // If climbing back up
                    if (spider.visible && !spider.descending) {
                        const newY = spider.y - 0.5
                        if (newY < -15) {
                            return { ...spider, visible: false }
                        }
                        return { ...spider, y: newY }
                    }

                    return spider
                })
            })
        }, 50)

        return () => clearInterval(behaviorInterval)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
            {spiders.map(spider => (
                <div
                    key={spider.id}
                    className="absolute transition-transform duration-100 ease-linear will-change-transform"
                    style={{
                        left: `${spider.x}%`,
                        top: `${spider.y}%`,
                        opacity: spider.visible ? 0.8 : 0,
                        transform: `rotate(${spider.rotation}deg) scale(${spider.scale})`
                    }}
                >
                    {/* Silk Thread */}
                    <div className="absolute bottom-1/2 left-1/2 w-[1px] bg-zinc-700/30 -translate-x-1/2 h-[100vh] origin-bottom"
                        style={{ transform: 'scaleY(-1)' }} />

                    <div className="relative w-16 h-16">
                        <Image
                            src="/assets/spider-realistic.png"
                            alt="Spider"
                            fill
                            className="object-contain drop-shadow-lg"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
