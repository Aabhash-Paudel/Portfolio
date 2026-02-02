"use client"

import { useEffect, useState } from 'react'

export function SmoothScroller() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        let lenis: any = null
        let animationId: number

        const initLenis = async () => {
            try {
                const Lenis = (await import('lenis')).default
                lenis = new Lenis({
                    duration: 1.2,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    orientation: 'vertical',
                    gestureOrientation: 'vertical',
                    smoothWheel: true,
                    touchMultiplier: 2,
                })

                function raf(time: number) {
                    lenis?.raf(time)
                    animationId = requestAnimationFrame(raf)
                }

                animationId = requestAnimationFrame(raf)
            } catch (error) {
                console.log('[v0] Lenis initialization skipped:', error)
            }
        }

        initLenis()

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId)
            }
            if (lenis) {
                lenis.destroy()
            }
        }
    }, [mounted])

    return null
}
