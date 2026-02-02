"use client"

import React from "react"
import { useState, useEffect, useCallback, useRef } from 'react'

interface Spider {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  scale: number
  legPhase: number
  legSpeed: number
  color: 'black' | 'brown' | 'gray' | 'redback' | 'tarantula'
  wanderAngle: number
  restTimer: number
  isResting: boolean
  restingOn: { x: number; y: number } | null
  crawlIntensity: number
}

interface BloodSplat {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  fadingOut: boolean
  color: string
}

const BLOOD_COLORS = [
  '#228B22', // Forest Green
  '#FF0000', // Red
  '#1E90FF', // Dodger Blue
  '#9370DB', // Medium Purple
  '#39FF14', // Neon Green (Alien)
  '#FF1493', // Deep Pink
  '#00FFFF', // Cyan
]

const SPIDER_COLORS = {
  black: { body: '#1A1A1A', legs: '#2A2A2A', abdomen: '#0D0D0D', markings: '#333333', eyes: '#FF0000' },
  brown: { body: '#4A3728', legs: '#5C4033', abdomen: '#3D2B1F', markings: '#6B4423', eyes: '#FFD700' },
  gray: { body: '#4A4A4A', legs: '#5A5A5A', abdomen: '#3A3A3A', markings: '#6A6A6A', eyes: '#FFFFFF' },
  redback: { body: '#1A1A1A', legs: '#2A2A2A', abdomen: '#0D0D0D', markings: '#CC0000', eyes: '#FF0000' },
  tarantula: { body: '#4A3020', legs: '#5C3D2E', abdomen: '#3D2518', markings: '#7A5040', eyes: '#FFD700' }
}

function SpiderShape({ color, legPhase, scale }: { color: keyof typeof SPIDER_COLORS; legPhase: number; scale: number }) {
  const colors = SPIDER_COLORS[color]

  // Leg animation - alternating pairs move together (spider gait)
  const legMove1 = Math.sin(legPhase) * 6
  const legMove2 = Math.sin(legPhase + Math.PI) * 6
  const legMove3 = Math.sin(legPhase + Math.PI * 0.5) * 6
  const legMove4 = Math.sin(legPhase + Math.PI * 1.5) * 6

  return (
    <svg
      width={60 * scale}
      height={50 * scale}
      viewBox="0 0 60 50"
      className="drop-shadow-sm"
      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
    >
      {/* Left legs (4) */}
      <path
        d={`M22 22 Q${10 + legMove1} ${15 + legMove1 * 0.5} ${2 + legMove1} ${10 + legMove1}`}
        stroke={colors.legs}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M20 26 Q${8 + legMove2} ${22 + legMove2 * 0.3} ${0 + legMove2} ${20 + legMove2 * 0.5}`}
        stroke={colors.legs}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M20 30 Q${8 + legMove3} ${32 - legMove3 * 0.3} ${0 + legMove3} ${36 - legMove3 * 0.5}`}
        stroke={colors.legs}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M22 34 Q${10 + legMove4} ${40 - legMove4 * 0.5} ${4 + legMove4} ${46 - legMove4}`}
        stroke={colors.legs}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Right legs (4) */}
      <path
        d={`M38 22 Q${50 - legMove1} ${15 + legMove1 * 0.5} ${58 - legMove1} ${10 + legMove1}`}
        stroke={colors.legs}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M40 26 Q${52 - legMove2} ${22 + legMove2 * 0.3} ${60 - legMove2} ${20 + legMove2 * 0.5}`}
        stroke={colors.legs}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M40 30 Q${52 - legMove3} ${32 - legMove3 * 0.3} ${60 - legMove3} ${36 - legMove3 * 0.5}`}
        stroke={colors.legs}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M38 34 Q${50 - legMove4} ${40 - legMove4 * 0.5} ${56 - legMove4} ${46 - legMove4}`}
        stroke={colors.legs}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Abdomen (back part) */}
      <ellipse cx="30" cy="34" rx="10" ry="12" fill={colors.abdomen} />
      {color === 'redback' && (
        <>
          <ellipse cx="30" cy="30" rx="3" ry="4" fill={colors.markings} />
          <ellipse cx="30" cy="38" rx="2" ry="3" fill={colors.markings} />
        </>
      )}
      {color === 'tarantula' && (
        <ellipse cx="30" cy="32" rx="8" ry="8" fill={colors.markings} opacity="0.3" />
      )}
      <ellipse cx="28" cy="32" rx="2" ry="3" fill={colors.markings} opacity="0.2" />
      <ellipse cx="32" cy="36" rx="2" ry="2" fill={colors.markings} opacity="0.2" />

      {/* Cephalothorax (front body) */}
      <ellipse cx="30" cy="22" rx="8" ry="7" fill={colors.body} />

      {/* Head/face area */}
      <ellipse cx="30" cy="16" rx="5" ry="4" fill={colors.body} />

      {/* Eyes - spiders have 8 eyes */}
      <circle cx="28" cy="14" r="2" fill="#111" />
      <circle cx="32" cy="14" r="2" fill="#111" />
      <circle cx="28.5" cy="13.5" r="0.8" fill={colors.eyes} />
      <circle cx="32.5" cy="13.5" r="0.8" fill={colors.eyes} />
      <circle cx="25" cy="15" r="1.2" fill="#111" />
      <circle cx="35" cy="15" r="1.2" fill="#111" />
      <circle cx="25.3" cy="14.7" r="0.4" fill={colors.eyes} />
      <circle cx="35.3" cy="14.7" r="0.4" fill={colors.eyes} />
      <circle cx="27" cy="12" r="1" fill="#111" />
      <circle cx="33" cy="12" r="1" fill="#111" />

      {/* Fangs */}
      <path d="M28 17 Q27 19 26 20" stroke={colors.body} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M32 17 Q33 19 34 20" stroke={colors.body} strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Pedipalps */}
      <ellipse cx="26" cy="18" rx="1.5" ry="1" fill={colors.legs} />
      <ellipse cx="34" cy="18" rx="1.5" ry="1" fill={colors.legs} />
    </svg>
  )
}

function SpiderSplatShape({ size, rotation, color }: { size: number; rotation: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Main splat */}
      <ellipse cx="50" cy="50" rx="38" ry="32" fill={color} />
      <ellipse cx="50" cy="50" rx="28" ry="22" fill={color} filter="brightness(0.8)" />

      {/* Splatter drops */}
      <ellipse cx="18" cy="28" rx="10" ry="7" fill={color} />
      <ellipse cx="82" cy="32" rx="12" ry="8" fill={color} />
      <ellipse cx="22" cy="72" rx="9" ry="11" fill={color} />
      <ellipse cx="78" cy="78" rx="11" ry="7" fill={color} />
      <ellipse cx="12" cy="52" rx="8" ry="10" fill={color} />
      <ellipse cx="88" cy="58" rx="9" ry="6" fill={color} />

      {/* Drips */}
      <ellipse cx="32" cy="88" rx="5" ry="10" fill={color} />
      <ellipse cx="58" cy="92" rx="4" ry="8" fill={color} />
      <ellipse cx="50" cy="90" rx="6" ry="12" fill={color} />
      <ellipse cx="72" cy="85" rx="4" ry="9" fill={color} />

      {/* Smaller splatters */}
      <circle cx="8" cy="38" r="4" fill={color} />
      <circle cx="92" cy="42" r="5" fill={color} />
      <circle cx="28" cy="12" r="4" fill={color} />
      <circle cx="72" cy="8" r="3" fill={color} />
      <circle cx="5" cy="65" r="3" fill={color} />
      <circle cx="95" cy="70" r="4" fill={color} />

      {/* Center darker area */}
      <ellipse cx="50" cy="50" rx="18" ry="14" fill="black" opacity="0.3" />

      {/* Crushed spider body remnants */}
      <ellipse cx="50" cy="48" rx="8" ry="6" fill="#1A1A1A" opacity="0.9" />
      <ellipse cx="50" cy="55" rx="6" ry="8" fill="#0D0D0D" opacity="0.8" />

      {/* Scattered legs */}
      <path d="M30 40 Q25 35 18 32" stroke="#2A2A2A" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M70 40 Q75 35 82 32" stroke="#2A2A2A" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M35 60 Q28 65 22 70" stroke="#2A2A2A" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M65 60 Q72 65 78 70" stroke="#2A2A2A" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M40 45 Q30 42 20 45" stroke="#2A2A2A" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M60 55 Q70 58 80 55" stroke="#2A2A2A" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  )
}

export function Butterflies() {
  const [spiders, setSpiders] = useState<Spider[]>([])
  const [bloodSplats, setBloodSplats] = useState<BloodSplat[]>([])
  const spiderIdRef = useRef(0)
  const splatIdRef = useRef(0)
  const animationRef = useRef<number>()

  // Spawn a new spider
  const spawnSpider = useCallback(() => {
    const colors: (keyof typeof SPIDER_COLORS)[] = ['black', 'brown', 'gray', 'redback', 'tarantula']
    const side = Math.random()
    let startX: number, startY: number

    // Spiders enter from edges, preferring bottom and sides
    if (side < 0.3) {
      startX = -60
      startY = Math.random() * window.innerHeight
    } else if (side < 0.6) {
      startX = window.innerWidth + 60
      startY = Math.random() * window.innerHeight
    } else if (side < 0.7) {
      startX = Math.random() * window.innerWidth
      startY = -60
    } else {
      startX = Math.random() * window.innerWidth
      startY = window.innerHeight + 60
    }

    const newSpider: Spider = {
      id: spiderIdRef.current++,
      x: startX,
      y: startY,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      rotation: Math.random() * 360,
      scale: 0.7 + Math.random() * 0.4,
      legPhase: Math.random() * Math.PI * 2,
      legSpeed: 0.06 + Math.random() * 0.04,
      color: colors[Math.floor(Math.random() * colors.length)],
      wanderAngle: Math.random() * Math.PI * 2,
      restTimer: 0,
      isResting: false,
      restingOn: null,
      crawlIntensity: 0.2 + Math.random() * 0.2
    }

    setSpiders(prev => [...prev, newSpider])
  }, [])

  // Animation loop
  useEffect(() => {
    let lastTime = performance.now()

    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 16, 3)
      lastTime = time

      setSpiders(prev => {
        const buttons = Array.from(document.querySelectorAll('a, button, [role="button"]')) as HTMLElement[]

        return prev.map(spider => {
          // Leg movement - faster when moving
          const speed = Math.sqrt(spider.vx * spider.vx + spider.vy * spider.vy)
          const newLegPhase = spider.legPhase + spider.legSpeed * dt * (spider.isResting ? 0 : Math.max(0.5, speed))

          let { x, y, vx, vy, rotation, wanderAngle, restTimer, isResting, restingOn } = spider

          if (isResting && restingOn) {
            restTimer += dt

            if (restTimer > 300 + Math.random() * 200) {
              // Time to crawl away
              isResting = false
              restingOn = null
              restTimer = 0
              vx = (Math.random() - 0.5) * 0.8
              vy = (Math.random() - 0.5) * 0.8
            } else {
              // Slight fidgeting while resting
              x = restingOn.x + Math.sin(time * 0.002) * 1
              y = restingOn.y + Math.cos(time * 0.002) * 1
            }
          } else {
            // Crawling behavior - slow and deliberate
            wanderAngle += (Math.random() - 0.5) * 0.08 * dt

            // Occasional direction changes (spider-like)
            if (Math.random() < 0.005 * dt) {
              wanderAngle += (Math.random() - 0.5) * Math.PI * 0.5
            }

            const wanderForce = 0.03
            vx += Math.cos(wanderAngle) * wanderForce * dt
            vy += Math.sin(wanderAngle) * wanderForce * dt

            // Spiders don't float up - slight downward tendency
            vy += 0.002 * dt

            // Subtle movement
            vx += (Math.random() - 0.5) * 0.15 * spider.crawlIntensity * dt
            vy += (Math.random() - 0.5) * 0.15 * spider.crawlIntensity * dt

            // Speed limit - slower movement
            const currentSpeed = Math.sqrt(vx * vx + vy * vy)
            const maxSpeed = 1
            if (currentSpeed > maxSpeed) {
              vx = (vx / currentSpeed) * maxSpeed
              vy = (vy / currentSpeed) * maxSpeed
            }

            x += vx * dt
            y += vy * dt

            // Rotation follows velocity
            const targetRotation = Math.atan2(vy, vx) * (180 / Math.PI) + 90
            let rotDiff = targetRotation - rotation
            while (rotDiff > 180) rotDiff -= 360
            while (rotDiff < -180) rotDiff += 360
            rotation += rotDiff * 0.1 * dt

            // Boundary steering
            const margin = 100
            const steerForce = 0.08
            if (x < margin) vx += steerForce * dt
            if (x > window.innerWidth - margin) vx -= steerForce * dt
            if (y < margin) vy += steerForce * dt
            if (y > window.innerHeight - margin) vy -= steerForce * dt

            // Try to rest on elements
            if (Math.random() < 0.003 * dt && buttons.length > 0) {
              const targetButton = buttons[Math.floor(Math.random() * buttons.length)]
              const rect = targetButton.getBoundingClientRect()
              const buttonX = rect.left + rect.width * Math.random()
              const buttonY = rect.top + rect.height * Math.random()

              const distToButton = Math.sqrt((x - buttonX) ** 2 + (y - buttonY) ** 2)
              if (distToButton < 300) {
                isResting = true
                restingOn = { x: buttonX, y: buttonY }
                restTimer = 0
                vx = 0
                vy = 0
              }
            }
          }

          // Remove if way off screen
          if (x < -200 || x > window.innerWidth + 200 || y < -200 || y > window.innerHeight + 200) {
            return null
          }

          return {
            ...spider,
            x, y, vx, vy, rotation, wanderAngle,
            legPhase: newLegPhase,
            restTimer, isResting, restingOn
          }
        }).filter((s): s is Spider => s !== null)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Spawn spiders - reduced count for better performance
  useEffect(() => {
    // Only spawn 3 spiders initially for better performance
    for (let i = 0; i < 3; i++) {
      setTimeout(() => spawnSpider(), i * 1500)
    }

    const interval = setInterval(() => {
      setSpiders(prev => {
        // Keep max 3 spiders for smoother performance
        if (prev.length < 3) {
          spawnSpider()
        }
        return prev
      })
    }, 8000) // Longer interval for less CPU usage

    return () => clearInterval(interval)
  }, [spawnSpider])

  // Handle spider click (squish)
  const killSpider = (spider: Spider, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()

    const splatId = splatIdRef.current++
    const randomColor = BLOOD_COLORS[Math.floor(Math.random() * BLOOD_COLORS.length)]

    const newSplat: BloodSplat = {
      id: splatId,
      x: spider.x - 50,
      y: spider.y - 50,
      size: 100 + Math.random() * 50,
      rotation: Math.random() * 360,
      fadingOut: false,
      color: randomColor
    }

    setBloodSplats(prev => [...prev, newSplat])
    setSpiders(prev => prev.filter(s => s.id !== spider.id))

    // Dispatch event
    window.dispatchEvent(new CustomEvent("butterfly-killed"))

    setTimeout(() => spawnSpider(), 1500)

    setTimeout(() => {
      setBloodSplats(prev => prev.map(s =>
        s.id === splatId ? { ...s, fadingOut: true } : s
      ))
    }, 8000)

    setTimeout(() => {
      setBloodSplats(prev => prev.filter(s => s.id !== splatId))
    }, 10000)
  }

  return (
    <>
      {bloodSplats.map(splat => (
        <div
          key={splat.id}
          className={`fixed pointer-events-none transition-opacity ${splat.fadingOut ? 'opacity-0' : 'opacity-100'}`}
          style={{
            left: splat.x,
            top: splat.y,
            zIndex: 9998,
            animation: 'splat 0.15s ease-out forwards',
            transitionDuration: '2s'
          }}
        >
          <SpiderSplatShape size={splat.size} rotation={splat.rotation} color={splat.color} />
        </div>
      ))}

      {spiders.map(spider => (
        <div
          key={spider.id}
          className="fixed cursor-pointer select-none"
          style={{
            left: spider.x - 30 * spider.scale,
            top: spider.y - 25 * spider.scale,
            transform: `rotate(${spider.rotation - 90}deg)`,
            zIndex: 9999,
            transition: spider.isResting ? 'none' : 'transform 0.05s ease-out'
          }}
          onClick={(e) => killSpider(spider, e)}
          onMouseDown={(e) => e.preventDefault()}
        >
          <SpiderShape
            color={spider.color}
            legPhase={spider.legPhase}
            scale={spider.scale}
          />
        </div>
      ))}

      <style jsx global>{`
        @keyframes splat {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
