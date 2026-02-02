"use client"

import { useState, useEffect, useCallback, useRef } from "react"

type AnimationState = "idle" | "walk" | "peek" | "point" | "nod" | "exit"

interface SectionConfig {
  id: string
  position: "bottom-right" | "left" | "right" | "center" | "bottom-left"
  dialogue: string[]
  behavior: AnimationState[]
}

const sectionConfigs: SectionConfig[] = [
  {
    id: "hero",
    position: "bottom-right",
    dialogue: [
      "Welcome! I'm your guide through Aabhash's portfolio.", 
      "He's a Cybersecurity Engineer with serious skills!",
      "Want to work with him? Keep exploring!"
    ],
    behavior: ["idle", "walk", "nod"],
  },
  {
    id: "about",
    position: "left",
    dialogue: [
      "Here you'll learn about Aabhash's journey.",
      "From curious learner to security professional!",
      "He's passionate about protecting digital systems."
    ],
    behavior: ["peek", "nod", "idle"],
  },
  {
    id: "skills",
    position: "right",
    dialogue: [
      "Check out these impressive skills!",
      "Penetration Testing, Network Security, Python...",
      "He's always learning something new!",
      "Would you like to work with someone this skilled?"
    ],
    behavior: ["idle", "point", "nod"],
  },
  {
    id: "projects",
    position: "bottom-left",
    dialogue: [
      "These are real projects Aabhash has built!",
      "Each one solves a real security challenge.",
      "Pretty impressive work, right?",
      "Do you want to collaborate on something?"
    ],
    behavior: ["walk", "idle", "point"],
  },
  {
    id: "experience",
    position: "right",
    dialogue: [
      "Years of hands-on experience here!",
      "Every role has shaped his expertise.",
      "He brings dedication to every team."
    ],
    behavior: ["idle", "nod", "exit"],
  },
  {
    id: "philosophy",
    position: "center",
    dialogue: [
      "Security is more than just technology.",
      "It's about vigilance and discipline.",
      "Interested in working together?"
    ],
    behavior: ["idle", "nod"],
  },
  {
    id: "contact",
    position: "bottom-right",
    dialogue: [
      "Ready to connect?",
      "Aabhash would love to hear from you!",
      "Don't be shy - reach out today!",
      "Want to work with him? Send a message!"
    ],
    behavior: ["nod", "idle", "walk"],
  },
]

// Realistic Hamster SVG Component
function RealisticHamster({ 
  animationState, 
  direction = "right" 
}: { 
  animationState: AnimationState
  direction?: "left" | "right" 
}) {
  const [breathePhase, setBreathePhase] = useState(0)
  const [blinkPhase, setBlinkPhase] = useState(0)
  const [earTwitch, setEarTwitch] = useState(0)
  const [whiskerTwitch, setWhiskerTwitch] = useState(0)
  const [tailWag, setTailWag] = useState(0)
  const [walkCycle, setWalkCycle] = useState(0)
  const [nodAngle, setNodAngle] = useState(0)
  const [peekOffset, setPeekOffset] = useState(0)

  // Breathing animation
  useEffect(() => {
    if (animationState === "exit") return
    const interval = setInterval(() => {
      setBreathePhase((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [animationState])

  // Blinking animation
  useEffect(() => {
    if (animationState === "exit") return
    const blink = () => {
      setBlinkPhase(1)
      setTimeout(() => setBlinkPhase(0), 150)
    }
    const interval = setInterval(blink, 3000 + Math.random() * 2000)
    blink()
    return () => clearInterval(interval)
  }, [animationState])

  // Ear twitching
  useEffect(() => {
    if (animationState === "exit") return
    const twitch = () => {
      setEarTwitch(1)
      setTimeout(() => setEarTwitch(0), 200)
    }
    const interval = setInterval(twitch, 4000 + Math.random() * 3000)
    return () => clearInterval(interval)
  }, [animationState])

  // Whisker movement
  useEffect(() => {
    if (animationState === "exit") return
    const interval = setInterval(() => {
      setWhiskerTwitch((prev) => (prev + 1) % 360)
    }, 100)
    return () => clearInterval(interval)
  }, [animationState])

  // Tail wagging for idle
  useEffect(() => {
    if (animationState !== "idle") return
    const interval = setInterval(() => {
      setTailWag((prev) => (prev + 1) % 360)
    }, 80)
    return () => clearInterval(interval)
  }, [animationState])

  // Walk cycle
  useEffect(() => {
    if (animationState !== "walk") return
    const interval = setInterval(() => {
      setWalkCycle((prev) => (prev + 1) % 360)
    }, 60)
    return () => clearInterval(interval)
  }, [animationState])

  // Nod animation
  useEffect(() => {
    if (animationState !== "nod") return
    let phase = 0
    const interval = setInterval(() => {
      phase += 15
      setNodAngle(Math.sin(phase * Math.PI / 180) * 8)
      if (phase >= 360) {
        setNodAngle(0)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [animationState])

  // Peek animation - removed horizontal offset, just uses scale
  useEffect(() => {
    if (animationState !== "peek") {
      setPeekOffset(0)
      return
    }
    setPeekOffset(1) // Just trigger the peek state
  }, [animationState])

  const breatheOffset = Math.sin(breathePhase * Math.PI / 180) * 1.5
  const whiskerOffset = Math.sin(whiskerTwitch * Math.PI / 180) * 2
  const tailAngle = Math.sin(tailWag * Math.PI / 180) * 15
  const walkBob = animationState === "walk" ? Math.sin(walkCycle * Math.PI / 180) * 2 : 0
  const legOffset = animationState === "walk" ? Math.sin(walkCycle * Math.PI / 180) * 4 : 0

  const scaleX = direction === "left" ? -1 : 1

  if (animationState === "exit") {
    return null
  }

  return (
    <svg 
      width="220" 
      height="200" 
      viewBox="0 0 80 70" 
      className="transition-all duration-500"
      style={{ 
        transform: `scaleX(${scaleX}) translateY(${walkBob}px)`,
        opacity: animationState === "exit" ? 0 : 1,
        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
      }}
    >
      <defs>
        {/* Fur texture gradient */}
        <radialGradient id="furGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E8D4B8" />
          <stop offset="40%" stopColor="#D4B896" />
          <stop offset="100%" stopColor="#B8956E" />
        </radialGradient>
        
        {/* Belly gradient */}
        <radialGradient id="bellyGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#F5E6D3" />
        </radialGradient>
        
        {/* Ear inner gradient */}
        <radialGradient id="earInnerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFCCC9" />
          <stop offset="100%" stopColor="#E8A8A5" />
        </radialGradient>
        
        {/* Nose gradient */}
        <radialGradient id="noseGradient" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#4A3728" />
          <stop offset="100%" stopColor="#2D1F15" />
        </radialGradient>
        
        {/* Eye gradient */}
        <radialGradient id="eyeGradient" cx="35%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        
        {/* Shield gradient */}
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A86C" />
          <stop offset="50%" stopColor="#B59A5A" />
          <stop offset="100%" stopColor="#8B7340" />
        </linearGradient>
        
        {/* Shield inner */}
        <linearGradient id="shieldInnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#6E3B3B" />
          <stop offset="100%" stopColor="#4A2020" />
        </linearGradient>

        {/* Soft shadow filter */}
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15"/>
        </filter>
      </defs>

      <g 
        transform={`translate(40, 35) rotate(${nodAngle})`}
        style={{ transformOrigin: "center" }}
      >
        {/* Back leg (behind body) */}
        <ellipse
          cx="-8"
          cy={18 - breatheOffset + legOffset * 0.5}
          rx="6"
          ry="5"
          fill="#C4A882"
        />
        
        {/* Tail */}
        <g transform={`rotate(${tailAngle} -18 10)`}>
          <ellipse
            cx="-22"
            cy="8"
            rx="5"
            ry="4"
            fill="url(#furGradient)"
          />
        </g>

        {/* Main body */}
        <ellipse
          cx="0"
          cy={8 - breatheOffset}
          rx="22"
          ry="18"
          fill="url(#furGradient)"
          filter="url(#softShadow)"
        />
        
        {/* Belly patch */}
        <ellipse
          cx="4"
          cy={12 - breatheOffset}
          rx="14"
          ry="12"
          fill="url(#bellyGradient)"
        />

        {/* Front legs */}
        <ellipse
          cx={-6 - legOffset}
          cy={20 - breatheOffset}
          rx="5"
          ry="4"
          fill="#D4B896"
        />
        <ellipse
          cx={8 + legOffset}
          cy={20 - breatheOffset}
          rx="5"
          ry="4"
          fill="#D4B896"
        />
        
        {/* Tiny paws */}
        <ellipse
          cx={-8 - legOffset}
          cy={23 - breatheOffset}
          rx="3"
          ry="2"
          fill="#FFCCC9"
        />
        <ellipse
          cx={10 + legOffset}
          cy={23 - breatheOffset}
          rx="3"
          ry="2"
          fill="#FFCCC9"
        />

        {/* Shield */}
        <g transform={`translate(18, ${2 - breatheOffset}) rotate(${animationState === "point" ? 15 : 0})`}>
          {/* Shield body */}
          <path
            d="M0,-12 L8,-8 L8,4 L0,12 L-8,4 L-8,-8 Z"
            fill="url(#shieldGradient)"
            stroke="#8B7340"
            strokeWidth="1"
          />
          {/* Shield inner design */}
          <path
            d="M0,-8 L5,-5 L5,2 L0,8 L-5,2 L-5,-5 Z"
            fill="url(#shieldInnerGradient)"
          />
          {/* Shield emblem - small cross */}
          <path
            d="M0,-4 L0,4 M-3,0 L3,0"
            stroke="#B59A5A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Head */}
        <ellipse
          cx="8"
          cy={-8 - breatheOffset}
          rx="16"
          ry="14"
          fill="url(#furGradient)"
        />
        
        {/* Cheek pouches */}
        <ellipse
          cx="-2"
          cy={-2 - breatheOffset}
          rx="8"
          ry="6"
          fill="#E8D4B8"
        />
        <ellipse
          cx="18"
          cy={-2 - breatheOffset}
          rx="7"
          ry="5"
          fill="#E8D4B8"
        />

        {/* Left ear */}
        <g transform={`rotate(${earTwitch * -5} -2 -18)`}>
          <ellipse
            cx="-4"
            cy={-20 - breatheOffset}
            rx="6"
            ry="8"
            fill="url(#furGradient)"
          />
          <ellipse
            cx="-4"
            cy={-19 - breatheOffset}
            rx="4"
            ry="5"
            fill="url(#earInnerGradient)"
          />
        </g>
        
        {/* Right ear */}
        <g transform={`rotate(${earTwitch * 5} 18 -18)`}>
          <ellipse
            cx="18"
            cy={-20 - breatheOffset}
            rx="6"
            ry="8"
            fill="url(#furGradient)"
          />
          <ellipse
            cx="18"
            cy={-19 - breatheOffset}
            rx="4"
            ry="5"
            fill="url(#earInnerGradient)"
          />
        </g>

        {/* Face details */}
        {/* Left eye */}
        <g>
          <ellipse
            cx="2"
            cy={-10 - breatheOffset}
            rx="4"
            ry={blinkPhase ? 0.5 : 4}
            fill="url(#eyeGradient)"
          />
          {!blinkPhase && (
            <ellipse
              cx="1"
              cy={-11 - breatheOffset}
              rx="1.5"
              ry="1.5"
              fill="white"
            />
          )}
        </g>
        
        {/* Right eye */}
        <g>
          <ellipse
            cx="14"
            cy={-10 - breatheOffset}
            rx="4"
            ry={blinkPhase ? 0.5 : 4}
            fill="url(#eyeGradient)"
          />
          {!blinkPhase && (
            <ellipse
              cx="13"
              cy={-11 - breatheOffset}
              rx="1.5"
              ry="1.5"
              fill="white"
            />
          )}
        </g>

        {/* Nose */}
        <ellipse
          cx="8"
          cy={-2 - breatheOffset}
          rx="3"
          ry="2.5"
          fill="url(#noseGradient)"
        />
        
        {/* Nose highlight */}
        <ellipse
          cx="7"
          cy={-3 - breatheOffset}
          rx="1"
          ry="0.8"
          fill="#5A4538"
          opacity="0.5"
        />

        {/* Whiskers */}
        <g stroke="#8B7355" strokeWidth="0.5" opacity="0.6">
          {/* Left whiskers */}
          <line 
            x1="-6" 
            y1={-2 - breatheOffset} 
            x2={-18 + whiskerOffset} 
            y2={-4 - breatheOffset} 
          />
          <line 
            x1="-6" 
            y1={0 - breatheOffset} 
            x2={-18 + whiskerOffset} 
            y2={0 - breatheOffset} 
          />
          <line 
            x1="-5" 
            y1={2 - breatheOffset} 
            x2={-16 + whiskerOffset} 
            y2={4 - breatheOffset} 
          />
          
          {/* Right whiskers */}
          <line 
            x1="22" 
            y1={-2 - breatheOffset} 
            x2={34 - whiskerOffset} 
            y2={-4 - breatheOffset} 
          />
          <line 
            x1="22" 
            y1={0 - breatheOffset} 
            x2={34 - whiskerOffset} 
            y2={0 - breatheOffset} 
          />
          <line 
            x1="21" 
            y1={2 - breatheOffset} 
            x2={32 - whiskerOffset} 
            y2={4 - breatheOffset} 
          />
        </g>

        {/* Mouth line */}
        <path
          d={`M5,${2 - breatheOffset} Q8,${4 - breatheOffset} 11,${2 - breatheOffset}`}
          fill="none"
          stroke="#6E4E37"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        
        {/* Fur texture details */}
        <g stroke="#B8956E" strokeWidth="0.3" opacity="0.4">
          <path d={`M-10,${-5 - breatheOffset} Q-8,${-6 - breatheOffset} -6,${-5 - breatheOffset}`} fill="none" />
          <path d={`M20,${-5 - breatheOffset} Q22,${-6 - breatheOffset} 24,${-5 - breatheOffset}`} fill="none" />
          <path d={`M-15,${5 - breatheOffset} Q-13,${4 - breatheOffset} -11,${5 - breatheOffset}`} fill="none" />
          <path d={`M15,${10 - breatheOffset} Q17,${9 - breatheOffset} 19,${10 - breatheOffset}`} fill="none" />
        </g>
      </g>
    </svg>
  )
}

// Speech Bubble Component
function SpeechBubble({ message, visible, isUrgent = false }: { message: string; visible: boolean; isUrgent?: boolean }) {
  return (
    <div
      className={`absolute bottom-full mb-8 left-1/2 -translate-x-1/2 w-[280px] md:w-[360px] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div 
        className="relative px-6 py-5 rounded-2xl border-2 shadow-xl"
        style={{
          backgroundColor: isUrgent ? "#FEF2F2" : "#FFFFFF",
          borderColor: isUrgent ? "#DC2626" : "#0066FF",
          boxShadow: isUrgent 
            ? "0 8px 30px rgba(220,38,38,0.2)" 
            : "0 8px 30px rgba(0,102,255,0.15)",
        }}
      >
        <p 
          className="text-base md:text-lg text-center leading-relaxed font-semibold"
          style={{ 
            fontFamily: "'Inter', system-ui, sans-serif",
            color: isUrgent ? "#DC2626" : "#1E293B",
            letterSpacing: "-0.01em",
          }}
        >
          {message}
        </p>
        {/* Speech bubble tail */}
        <div 
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 rotate-45 border-r-2 border-b-2"
          style={{
            backgroundColor: isUrgent ? "#FEF2F2" : "#FFFFFF",
            borderColor: isUrgent ? "#DC2626" : "#0066FF",
          }}
        />
      </div>
    </div>
  )
}

// Hamster Skeleton SVG Component
function HamsterSkeleton({ direction = "right" }: { direction?: "left" | "right" }) {
  const [floatPhase, setFloatPhase] = useState(0)
  const scaleX = direction === "left" ? -1 : 1
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatPhase((prev) => (prev + 1) % 360)
    }, 80)
    return () => clearInterval(interval)
  }, [])
  
  const floatY = Math.sin(floatPhase * Math.PI / 180) * 3
  
  return (
    <svg 
      width="220" 
      height="200" 
      viewBox="0 0 80 70" 
      className="transition-all duration-500"
      style={{ 
        transform: `scaleX(${scaleX}) translateY(${floatY}px)`,
        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))"
      }}
    >
      <defs>
        <linearGradient id="boneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F0" />
          <stop offset="50%" stopColor="#E8E4D8" />
          <stop offset="100%" stopColor="#D4CFC0" />
        </linearGradient>
      </defs>
      
      <g transform="translate(40, 35)">
        {/* Spine */}
        <ellipse cx="0" cy="8" rx="16" ry="10" fill="none" stroke="url(#boneGradient)" strokeWidth="3" />
        <line x1="-14" y1="8" x2="14" y2="8" stroke="url(#boneGradient)" strokeWidth="2.5" />
        
        {/* Ribs */}
        <line x1="-8" y1="2" x2="-12" y2="12" stroke="url(#boneGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="-3" y1="0" x2="-6" y2="14" stroke="url(#boneGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="3" y1="0" x2="6" y2="14" stroke="url(#boneGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="2" x2="12" y2="12" stroke="url(#boneGradient)" strokeWidth="2" strokeLinecap="round" />
        
        {/* Skull */}
        <ellipse cx="8" cy="-8" rx="12" ry="10" fill="url(#boneGradient)" />
        <ellipse cx="8" cy="-6" rx="8" ry="6" fill="#2A2520" opacity="0.1" />
        
        {/* Eye sockets */}
        <ellipse cx="3" cy="-9" rx="4" ry="4" fill="#1A1510" />
        <ellipse cx="13" cy="-9" rx="4" ry="4" fill="#1A1510" />
        
        {/* Tiny eye lights (ghost effect) */}
        <circle cx="3" cy="-9" r="1.5" fill="#FFE4B5" opacity="0.6" />
        <circle cx="13" cy="-9" r="1.5" fill="#FFE4B5" opacity="0.6" />
        
        {/* Nose hole */}
        <ellipse cx="8" cy="-2" rx="2" ry="1.5" fill="#2A2520" />
        
        {/* Teeth */}
        <rect x="5" y="0" width="2" height="3" fill="url(#boneGradient)" rx="0.5" />
        <rect x="9" y="0" width="2" height="3" fill="url(#boneGradient)" rx="0.5" />
        
        {/* Front leg bones */}
        <g>
          <line x1="-6" y1="16" x2="-10" y2="24" stroke="url(#boneGradient)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="-10" cy="24" r="2" fill="url(#boneGradient)" />
        </g>
        <g>
          <line x1="8" y1="16" x2="12" y2="24" stroke="url(#boneGradient)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="24" r="2" fill="url(#boneGradient)" />
        </g>
        
        {/* Back leg bone */}
        <g>
          <line x1="-10" y1="10" x2="-14" y2="20" stroke="url(#boneGradient)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="-14" cy="20" r="2" fill="url(#boneGradient)" />
        </g>
        
        {/* Tail bones */}
        <line x1="-16" y1="8" x2="-22" y2="6" stroke="url(#boneGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="-22" y1="6" x2="-26" y2="8" stroke="url(#boneGradient)" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Shield (still held by skeleton) */}
        <g transform="translate(18, 2) rotate(15)">
          <path
            d="M0,-12 L8,-8 L8,4 L0,12 L-8,4 L-8,-8 Z"
            fill="#8B7340"
            stroke="#6B5530"
            strokeWidth="1"
            opacity="0.7"
          />
          <path
            d="M0,-8 L5,-5 L5,2 L0,8 L-5,2 L-5,-5 Z"
            fill="#4A2020"
            opacity="0.6"
          />
        </g>
      </g>
    </svg>
  )
}

const OUCH_MESSAGES = [
  "Ouch!",
  "Ow! That hurts!",
  "Hey, stop that!",
  "Please don't...",
  "Why are you doing this?!",
]

const DEATH_MESSAGE = "You... monster..."

export function HamsterGuide() {
  const [isHidden, setIsHidden] = useState(true)
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const [animationState, setAnimationState] = useState<AnimationState>("idle")
  const [currentDialogue, setCurrentDialogue] = useState<string>("")
  const [showDialogue, setShowDialogue] = useState(false)
  const [position, setPosition] = useState<SectionConfig["position"]>("bottom-right")
  const [isExiting, setIsExiting] = useState(false)
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set())
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [isDead, setIsDead] = useState(false)
  const [isUrgentMessage, setIsUrgentMessage] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dialogueIndexRef = useRef(0)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Check localStorage and reduced motion preference on mount
  useEffect(() => {
    const hidden = localStorage.getItem("hamster-guide-hidden")
    if (hidden === "true") {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  // Listen for spider kills
  useEffect(() => {
    if (isHidden) return
    
    const handleButterflyKill = () => {
      // Interrupt current dialogue
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      setCurrentDialogue("Please don't kill the spiders...")
      setIsUrgentMessage(true)
      setShowDialogue(true)
      setAnimationState("nod")
      
      timeoutRef.current = setTimeout(() => {
        setShowDialogue(false)
        setIsUrgentMessage(false)
        setAnimationState("idle")
      }, 3000)
    }
    
    window.addEventListener("butterfly-killed", handleButterflyKill)
    return () => window.removeEventListener("butterfly-killed", handleButterflyKill)
  }, [isHidden])

  // Handle hamster click
  const handleHamsterClick = useCallback(() => {
    if (isDead) return
    
    // Clear any existing click timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
    }
    
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
    setIsShaking(true)
    
    // Stop shaking after animation
    setTimeout(() => setIsShaking(false), 300)
    
    // Interrupt current dialogue
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    if (newClickCount >= 5) {
      // Death
      setCurrentDialogue(DEATH_MESSAGE)
      setIsUrgentMessage(true)
      setShowDialogue(true)
      
      setTimeout(() => {
        setIsDead(true)
        setShowDialogue(false)
        
        // Show skeleton message after a moment
        setTimeout(() => {
          setCurrentDialogue("...I will continue my duty.")
          setIsUrgentMessage(false)
          setShowDialogue(true)
          
          setTimeout(() => {
            setShowDialogue(false)
          }, 3000)
        }, 1000)
      }, 1500)
    } else {
      // Ouch message
      setCurrentDialogue(OUCH_MESSAGES[Math.min(newClickCount - 1, OUCH_MESSAGES.length - 1)])
      setIsUrgentMessage(true)
      setShowDialogue(true)
      
      timeoutRef.current = setTimeout(() => {
        setShowDialogue(false)
        setIsUrgentMessage(false)
      }, 2000)
    }
    
    // Reset click count after 3 seconds of no clicks
    clickTimeoutRef.current = setTimeout(() => {
      if (!isDead) {
        setClickCount(0)
      }
    }, 3000)
  }, [clickCount, isDead])

  // Intersection Observer for sections
  useEffect(() => {
    if (isHidden) return

    const observers: IntersectionObserver[] = []

    sectionConfigs.forEach((config) => {
      const element = document.getElementById(config.id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              if (!visitedSections.has(config.id)) {
                setCurrentSection(config.id)
              }
            }
          })
        },
        { threshold: 0.5 }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [isHidden, visitedSections])

  // Handle section changes
  const playDialogueSequence = useCallback((config: SectionConfig) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    setPosition(config.position)
    setDirection(config.position === "left" ? "right" : "left")
    setAnimationState(config.behavior[0] || "idle")
    setIsExiting(false)
    dialogueIndexRef.current = 0

    const showNextDialogue = () => {
      if (dialogueIndexRef.current < config.dialogue.length) {
        setCurrentDialogue(config.dialogue[dialogueIndexRef.current])
        setShowDialogue(true)

        timeoutRef.current = setTimeout(() => {
          setShowDialogue(false)
          dialogueIndexRef.current++

          timeoutRef.current = setTimeout(() => {
            showNextDialogue()
          }, 500)
        }, 3500)
      } else {
        // End of dialogue
        if (config.behavior.includes("exit")) {
          setAnimationState("exit")
          setIsExiting(true)
        }
        setVisitedSections((prev) => new Set([...prev, config.id]))
      }
    }

    timeoutRef.current = setTimeout(() => {
      showNextDialogue()
    }, 800)
  }, [])

  useEffect(() => {
    if (!currentSection || isHidden) return

    const config = sectionConfigs.find((c) => c.id === currentSection)
    if (config && !visitedSections.has(currentSection)) {
      playDialogueSequence(config)
    }
  }, [currentSection, isHidden, visitedSections, playDialogueSequence])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleHide = () => {
    localStorage.setItem("hamster-guide-hidden", "true")
    setIsHidden(true)
  }

  if (isHidden || prefersReducedMotion) {
    return null
  }

  const positionClasses = {
    "bottom-right": "fixed bottom-4 right-4 md:bottom-8 md:right-8",
    "bottom-left": "fixed bottom-4 left-4 md:bottom-8 md:left-8",
    "left": "fixed left-2 bottom-24 md:left-4 md:bottom-32",
    "right": "fixed right-2 bottom-24 md:right-8 md:bottom-32",
    "center": "fixed bottom-24 left-1/2 -translate-x-1/2 md:bottom-32",
  }

  return (
    <div
      className={`${positionClasses[position]} z-50 transition-all duration-700 ease-out ${
        isExiting ? "opacity-0 translate-y-4" : "opacity-100"
      }`}
    >
      <div className="relative">
        <SpeechBubble message={currentDialogue} visible={showDialogue} isUrgent={isUrgentMessage} />
        
        <div 
          className={`relative cursor-pointer select-none transition-transform ${isShaking ? "animate-shake" : ""}`}
          onClick={handleHamsterClick}
          onKeyDown={(e) => e.key === "Enter" && handleHamsterClick()}
          role="button"
          tabIndex={0}
          aria-label={isDead ? "Hamster skeleton guide" : "Hamster guide - click to interact"}
        >
          {isDead ? (
            <HamsterSkeleton direction={direction} />
          ) : (
            <RealisticHamster 
              animationState={animationState} 
              direction={direction}
            />
          )}
          
          {/* Hide button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleHide()
            }}
            className="absolute top-0 right-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all opacity-60 hover:opacity-100 focus:opacity-100"
            style={{
              backgroundColor: "#ECE6DA",
              color: "#6B6B6B",
              border: "1px solid #D4CFC4",
            }}
            aria-label="Hide guide"
            title="Hide guide"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="2" y1="2" x2="8" y2="8" />
              <line x1="8" y1="2" x2="2" y2="8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
