"use client"

import { useState, useEffect, useCallback } from 'react'

interface WebThread {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  opacity: number
  progress: number
}

interface WebSpider {
  id: number
  x: number
  y: number
  targetX: number
  targetY: number
  isBuilding: boolean
  webThreads: WebThread[]
  legPhase: number
  size: number
}

// Small spider that builds webs
function WebBuilderSpider({ x, y, size, legPhase }: { x: number; y: number; size: number; legPhase: number }) {
  const legMove = Math.sin(legPhase) * 3
  
  return (
    <g transform={`translate(${x}, ${y}) scale(${size})`}>
      {/* Body */}
      <ellipse cx="0" cy="0" rx="4" ry="3" fill="#2A2A2A" />
      <ellipse cx="0" cy="5" rx="5" ry="6" fill="#1A1A1A" />
      
      {/* Legs - 8 total */}
      <g stroke="#2A2A2A" strokeWidth="0.8" fill="none">
        {/* Left legs */}
        <path d={`M-2,-1 Q${-8 + legMove},-4 ${-10 + legMove},-8`} />
        <path d={`M-3,0 Q${-9 - legMove},-1 ${-12 - legMove},-2`} />
        <path d={`M-3,2 Q${-9 + legMove},3 ${-12 + legMove},6`} />
        <path d={`M-2,4 Q${-7 - legMove},8 ${-9 - legMove},12`} />
        
        {/* Right legs */}
        <path d={`M2,-1 Q${8 - legMove},-4 ${10 - legMove},-8`} />
        <path d={`M3,0 Q${9 + legMove},-1 ${12 + legMove},-2`} />
        <path d={`M3,2 Q${9 - legMove},3 ${12 - legMove},6`} />
        <path d={`M2,4 Q${7 + legMove},8 ${9 + legMove},12`} />
      </g>
      
      {/* Eyes */}
      <circle cx="-1.5" cy="-2" r="1" fill="#333" />
      <circle cx="1.5" cy="-2" r="1" fill="#333" />
      <circle cx="-1.5" cy="-2" r="0.4" fill="#666" />
      <circle cx="1.5" cy="-2" r="0.4" fill="#666" />
    </g>
  )
}

function CornerWebWithSpider({ corner, size }: { corner: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; size: number }) {
  const [threads, setThreads] = useState<WebThread[]>([])
  const [spider, setSpider] = useState<{ x: number; y: number; legPhase: number; visible: boolean }>({ 
    x: 0, y: 0, legPhase: 0, visible: true 
  })
  const [buildProgress, setBuildProgress] = useState(0)
  
  const cornerRotations = {
    'top-left': 0,
    'top-right': 90,
    'bottom-right': 180,
    'bottom-left': 270
  }
  
  // Initialize and animate web building
  useEffect(() => {
    // Create radial threads
    const radialThreads: WebThread[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      startX: 0,
      startY: 0,
      endX: Math.cos((i * 11.25 * Math.PI) / 180) * (150 - i * 5),
      endY: Math.sin((i * 11.25 * Math.PI) / 180) * (150 - i * 5),
      opacity: 0.2,
      progress: 0
    }))
    
    // Create curved threads
    const curvedThreads: WebThread[] = Array.from({ length: 6 }).map((_, i) => ({
      id: 100 + i,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      opacity: 0.15,
      progress: 0
    }))
    
    setThreads([...radialThreads, ...curvedThreads])
    
    // Animate building
    const buildInterval = setInterval(() => {
      setBuildProgress(prev => {
        if (prev >= 100) {
          clearInterval(buildInterval)
          return 100
        }
        return prev + 0.5
      })
    }, 50)
    
    // Animate spider
    const spiderInterval = setInterval(() => {
      setSpider(prev => ({
        ...prev,
        legPhase: prev.legPhase + 0.3,
        x: Math.sin(prev.legPhase * 0.1) * 20 + 30,
        y: Math.cos(prev.legPhase * 0.1) * 20 + 30,
        visible: buildProgress < 100 || Math.random() > 0.01
      }))
    }, 50)
    
    return () => {
      clearInterval(buildInterval)
      clearInterval(spiderInterval)
    }
  }, [])
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200"
      style={{ 
        transform: `rotate(${cornerRotations[corner]}deg)`,
        filter: 'drop-shadow(0 0 1px rgba(0,102,255,0.1))'
      }}
    >
      {/* Corner anchor point */}
      <circle cx="0" cy="0" r="3" fill="rgba(0,102,255,0.3)" />
      
      {/* Main radial threads from corner - animated */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 11.25 * Math.PI) / 180
        const length = (150 - i * 5) * Math.min(buildProgress / 100, 1)
        const endX = Math.cos(angle) * length
        const endY = Math.sin(angle) * length
        return (
          <line
            key={`radial-${i}`}
            x1="0"
            y1="0"
            x2={endX}
            y2={endY}
            stroke="rgba(0,102,255,0.2)"
            strokeWidth="0.6"
            style={{
              transition: 'all 0.3s ease-out'
            }}
          />
        )
      })}
      
      {/* Curved connecting threads - animated */}
      {Array.from({ length: 8 }).map((_, ringIndex) => {
        const ringProgress = Math.max(0, (buildProgress - ringIndex * 10) / 100)
        if (ringProgress <= 0) return null
        
        const baseRadius = 15 + ringIndex * 14
        const points: string[] = []
        
        for (let i = 0; i <= 90 * ringProgress; i += 3) {
          const angle = (i * Math.PI) / 180
          const wobble = Math.sin(i * 0.15) * 2
          const r = baseRadius + wobble
          const x = Math.cos(angle) * r
          const y = Math.sin(angle) * r
          points.push(`${x},${y}`)
        }
        
        return (
          <polyline
            key={`arc-${ringIndex}`}
            points={points.join(' ')}
            fill="none"
            stroke="rgba(0,102,255,0.15)"
            strokeWidth="0.4"
          />
        )
      })}
      
      {/* Anchor dots at intersections */}
      {buildProgress > 50 && Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 11.25 * Math.PI) / 180
        return Array.from({ length: 5 }).map((_, ringIndex) => {
          if ((buildProgress - ringIndex * 10) / 100 < 0.5) return null
          const radius = 15 + ringIndex * 14
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          return (
            <circle
              key={`dot-${i}-${ringIndex}`}
              cx={x}
              cy={y}
              r="1.5"
              fill="rgba(0,102,255,0.25)"
            />
          )
        })
      })}
      
      {/* Spider building the web */}
      {spider.visible && buildProgress < 95 && (
        <WebBuilderSpider 
          x={spider.x} 
          y={spider.y} 
          size={0.8} 
          legPhase={spider.legPhase} 
        />
      )}
      
      {/* Web silk thread from spider */}
      {spider.visible && buildProgress < 95 && (
        <line
          x1="0"
          y1="0"
          x2={spider.x}
          y2={spider.y}
          stroke="rgba(0,102,255,0.3)"
          strokeWidth="0.3"
          strokeDasharray="2,2"
        />
      )}
    </svg>
  )
}

export function SpiderWebs() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Corner webs with building spiders */}
      <div className="absolute top-0 left-0" style={{ opacity: 0.7 }}>
        <CornerWebWithSpider corner="top-left" size={180} />
      </div>
      <div className="absolute top-0 right-0" style={{ opacity: 0.5 }}>
        <CornerWebWithSpider corner="top-right" size={140} />
      </div>
      <div className="absolute bottom-0 left-0" style={{ opacity: 0.6 }}>
        <CornerWebWithSpider corner="bottom-left" size={160} />
      </div>
    </div>
  )
}
