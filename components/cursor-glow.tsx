"use client"

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePathname } from 'next/navigation'

const COLORS = {
    '/': 'rgba(255, 255, 255, 0.1)', // Home: White
    '/projects': 'rgba(0, 255, 128, 0.15)', // Projects: Cyber Green
    '/skills': 'rgba(59, 130, 246, 0.15)', // Skills: Blue
    '/contact': 'rgba(244, 63, 94, 0.15)' // Contact: Red/Pink
}

export function CursorGlow() {
    const pathname = usePathname()
    const [color, setColor] = useState(COLORS['/'] || COLORS['/'])

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 200 }

    // Smooth followers
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    useEffect(() => {
        // Set color based on path
        const basePath = pathname === '/' ? '/' : `/${pathname.split('/')[1]}`
        setColor(COLORS[basePath as keyof typeof COLORS] || 'rgba(255, 255, 255, 0.1)')
    }, [pathname])

    return (
        <motion.div
            className="fixed top-0 left-0 w-[120px] h-[120px] rounded-full pointer-events-none z-50 hidden md:block mix-blend-screen blur-[40px]"
            style={{
                x,
                y,
                backgroundColor: color,
                translateX: '-50%',
                translateY: '-50%'
            }}
            animate={{
                backgroundColor: color
            }}
            transition={{
                backgroundColor: { duration: 0.5 }
            }}
        />
    )
}
