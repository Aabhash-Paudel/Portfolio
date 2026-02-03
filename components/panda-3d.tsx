"use client"

import { useEffect, useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion'

// --- Types & Constants ---

type PandaState =
    | 'idle'
    | 'happy'
    | 'serious'
    | 'confused'
    | 'hungry'
    | 'flirty'
    | 'tired'
    | 'skeleton'

const PANDA_ASSETS: Record<PandaState, string> = {
    idle: '/assets/panda-3d-idle.png',
    happy: '/assets/panda-3d-happy.png',
    serious: '/assets/panda-3d-serious.png',
    confused: '/assets/panda-3d-confused.png',
    hungry: '/assets/panda-3d-hungry.png',
    flirty: '/assets/panda-3d-flirty.png',
    tired: '/assets/panda-3d-tired.png',
    skeleton: '/assets/panda-3d-skeleton.png',
}

const DIALOGUES_GENERAL = [
    "Hey! I live here now.",
    "This is Aabhash’s portfolio... yeah, he’s kinda cool.",
    "Scroll slowly. I’m watching.",
    "Cybersecurity isn’t magic. It’s discipline.",
    "He breaks systems... legally.",
]

const DIALOGUES_CYBER = [
    "SOC mindset. Attacker brain.",
    "Logs don’t lie. People do.",
    "MITRE ATT&CK? He speaks it fluently.",
    "He finds bugs before hackers do.",
    "Metasploit is basically his second brain.",
    "Analysis of PE headers is tricky!",
    "I guard your endpoints.",
]

const DIALOGUES_SKILLS = [
    "Python, SIEMs, networks... he juggles them all.",
    "Burp Suite? Nmap? Old friends.",
    "He once reduced scan time by sixty percent.",
    "Defense wins championships. Offense wins respect.",
    "Reverse engineering malware is fun!",
]

const DIALOGUES_FUN = [
    "Sometimes he forgets to eat while debugging.",
    "He drinks tea like it’s a patch update.",
    "Yes, he actually enjoys log analysis.",
    "Don’t ask how many tabs he has open.",
    "I love bamboo... and code.",
]

const DIALOGUES_HUNGRY = [
    "I’m hungry... is this a food website?",
    "Cybersecurity runs on snacks.",
    "Do you have any dumplings?",
]

const DIALOGUES_FLIRTY = [
    "You scroll nicely, you know that?",
    "If curiosity were a person... it’d be you.",
    "Don’t worry, I only flirt professionally.",
    "My chi is strong today. ✨",
]

const DIALOGUES_TIRED = [
    "System scan complete... I need a nap.",
    "Ugh, so many logs to check.",
    "Power saving mode initiated.",
]

const DIALOGUES_SKELETON = [
    "Well... that escalated quickly.",
    "Even as a skeleton, I’m still smarter.",
    "Death can’t stop good cybersecurity.",
    "I feel so... light.",
    "Did I lose some weight?",
]

const DIALOGUES_CLICK_REACTION = [
    "Ouch! Easy there, warrior.",
    "Hey! I felt that.",
    "Careful... I bite back.",
    "That tickles!",
    "Hey!",
]

const DIALOGUES_SPIDER_DEFENSE = [
    "He eats them?! Nooo!",
    "Don't kill my food please!",
    "Those were high protein spiders!",
    "Why would you squish it!?",
]

// --- Component ---

import { useTransitionContext } from '@/components/transition-context'

export function Panda3D() {
    const { isTransitioning } = useTransitionContext()

    const [currentState, setCurrentState] = useState<PandaState>('idle')
    const [mounted, setMounted] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [clickCount, setClickCount] = useState(0)

    // Dialogue Logic
    const [dialogue, setDialogue] = useState("")
    const [showDialogue, setShowDialogue] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)
    const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const { scrollY } = useScroll()

    // --- Helpers ---

    const triggerDialogue = useCallback((text: string, duration = 4000) => {
        setDialogue(text)
        setShowDialogue(true)
        setTimeout(() => setShowDialogue(false), duration)
    }, [])

    const getRandomDialogue = (category: string[]) => {
        return category[Math.floor(Math.random() * category.length)]
    }

    // --- Autonomous State Machine ---

    useEffect(() => {
        setMounted(true)

        const stateLoop = setInterval(() => {
            // Don't switch state if user is hovering, or if we are in a "locked" state like serious(scroll) or skeleton
            // Also pause if transitioning
            if (isTransitioning || isHovered || currentState === 'skeleton' || currentState === 'serious') return

            // Randomly decide to switch state
            const rand = Math.random()
            let newState: PandaState = 'idle'

            if (rand < 0.5) newState = 'idle'
            else if (rand < 0.65) newState = 'confused'
            else if (rand < 0.75) newState = 'hungry'
            else if (rand < 0.85) newState = 'flirty'
            else if (rand < 0.95) newState = 'tired'
            else newState = 'happy' // Rare happy

            setCurrentState(newState)

            // Trigger context-aware dialogue based on new state
            if (Math.random() > 0.4) { // 60% chance to talk when state changes
                let line = ""
                switch (newState) {
                    case 'hungry': line = getRandomDialogue(DIALOGUES_HUNGRY); break;
                    case 'flirty': line = getRandomDialogue(DIALOGUES_FLIRTY); break;
                    case 'tired': line = getRandomDialogue(DIALOGUES_TIRED); break;
                    case 'confused': line = getRandomDialogue(DIALOGUES_FUN); break; // Quirky lines
                    default: line = getRandomDialogue([...DIALOGUES_GENERAL, ...DIALOGUES_CYBER, ...DIALOGUES_SKILLS]);
                }
                triggerDialogue(line)
            }

        }, 8000 + Math.random() * 4000) // Every 8-12 seconds

        return () => clearInterval(stateLoop)
    }, [currentState, isHovered, triggerDialogue]) // Added triggerDialogue dependency for safety

    // --- Spider Interaction ---
    useEffect(() => {
        const handleSpiderDeath = () => {
            // Immediate reaction overrides everything
            if (currentState !== 'skeleton') {
                setCurrentState('serious')
                triggerDialogue(getRandomDialogue(DIALOGUES_SPIDER_DEFENSE), 3000)

                // Reset to idle after a bit
                setTimeout(() => {
                    if (currentState !== 'skeleton') setCurrentState('idle')
                }, 3000)
            }
        }

        window.addEventListener('butterfly-killed', handleSpiderDeath)
        return () => window.removeEventListener('butterfly-killed', handleSpiderDeath)
    }, [currentState, triggerDialogue])

    // --- Scroll Reactions ---
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (currentState === 'skeleton') return

        const velocity = scrollY.getVelocity()

        // High speed scroll = Serious
        if (Math.abs(velocity) > 1200) {
            if (currentState !== 'serious') {
                setCurrentState('serious')
                // Trigger cyber dialogue rarely on fast scroll
                if (Math.random() > 0.8) triggerDialogue(getRandomDialogue(DIALOGUES_CYBER), 2000)
            }

            clearTimeout((window as any).scrollTimeout)
                ; (window as any).scrollTimeout = setTimeout(() => {
                    if (currentState !== 'skeleton') setCurrentState('idle')
                }, 600)
        }

        // Bottom of page
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        if (latest > docHeight - 100) {
            if (currentState !== 'happy' && currentState !== 'skeleton') {
                setCurrentState('happy')
                triggerDialogue("Still here? I like you.")
            }
        }
    })

    // --- Click / Touch Logic ---

    const handleInteraction = () => {
        if (currentState === 'skeleton') {
            triggerDialogue(getRandomDialogue(DIALOGUES_SKELETON))
            return
        }

        const newCount = clickCount + 1
        setClickCount(newCount)

        // Clear auto-reset of click count
        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
        clickTimeoutRef.current = setTimeout(() => setClickCount(0), 2000) // Reset if idle for 2s

        if (newCount >= 5) {
            // EXPLOSION!
            triggerExplosion()
        } else {
            // Normal click
            triggerDialogue(getRandomDialogue(DIALOGUES_CLICK_REACTION), 1500)

            // Physical recoil animation (handled by Framer Motion variants key in render)
        }
    }

    const triggerExplosion = () => {
        setClickCount(0)
        setCurrentState('skeleton')
        triggerDialogue("Well... that escalated quickly.", 4000)

        // Respawn after cooldown
        setTimeout(() => {
            setCurrentState('idle')
            triggerDialogue("I'm back! Did you miss me?", 3000)
        }, 30000) // 30s cooldown
    }


    // --- Render ---

    if (!mounted) return null

    return (
        <div
            ref={containerRef}
            className={`fixed bottom-0 left-0 z-50 pointer-events-auto transition-opacity duration-500 hidden md:block ${isTransitioning ? 'opacity-50 pointer-events-none grayscale' : 'opacity-100'}`}
            onClick={handleInteraction}
            onMouseEnter={() => {
                setIsHovered(true)
                if (currentState !== 'skeleton') setCurrentState('happy')
            }}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] origin-bottom-left transition-transform duration-300 ease-out 
        ${isHovered ? 'scale-105' : 'scale-100'}
        ${currentState === 'skeleton' ? 'animate-bounce-slight' : ''}
      `}>

                {/* Speech Bubble */}
                <div
                    className={`absolute -top-16 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 transform pointer-events-none w-56
            ${showDialogue ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
          `}
                >
                    <div className="bg-white text-black p-4 rounded-3xl shadow-2xl border-2 border-black font-mono text-sm text-center relative leading-tight">
                        {dialogue}
                        {/* Bubble Tail */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-black transform rotate-45"></div>
                    </div>
                </div>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentState}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute inset-0 flex items-end justify-start"
                        whileTap={{ scale: 0.95, rotate: -5 }}
                    >
                        {/* Chroma Key Filter Application */}
                        <div className="relative w-full h-full">
                            <Image
                                src={PANDA_ASSETS[currentState] || PANDA_ASSETS['idle']}
                                alt={`Panda ${currentState}`}
                                fill
                                className="object-contain object-bottom drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Breathing / Atmosphere Wrapper */}
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <style jsx global>{`

        @keyframes bounce-slight {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        .animate-bounce-slight {
            animation: bounce-slight 2s infinite ease-in-out;
        }
      `}</style>


        </div>
    )
}
