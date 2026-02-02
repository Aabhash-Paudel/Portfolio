"use client"

import { useInView } from '@/hooks/use-in-view'

// Decorative crossed swords with shield emblem
const SwordShieldEmblem = () => (
  <svg className="w-32 h-40 md:w-40 md:h-48" viewBox="0 0 100 120" fill="none">
    {/* Left sword */}
    <g transform="rotate(-30 50 60)">
      <path d="M50 10 L50 80" stroke="#B59A5A" strokeWidth="2" />
      <path d="M40 80 L60 80" stroke="#B59A5A" strokeWidth="2" />
      <path d="M45 80 L45 95 L55 95 L55 80" stroke="#B59A5A" strokeWidth="1.5" fill="none" />
      <path d="M50 95 L50 105" stroke="#B59A5A" strokeWidth="2" />
      <path d="M45 15 L50 5 L55 15" fill="#B59A5A" opacity="0.4" />
    </g>
    
    {/* Right sword */}
    <g transform="rotate(30 50 60)">
      <path d="M50 10 L50 80" stroke="#B59A5A" strokeWidth="2" />
      <path d="M40 80 L60 80" stroke="#B59A5A" strokeWidth="2" />
      <path d="M45 80 L45 95 L55 95 L55 80" stroke="#B59A5A" strokeWidth="1.5" fill="none" />
      <path d="M50 95 L50 105" stroke="#B59A5A" strokeWidth="2" />
      <path d="M45 15 L50 5 L55 15" fill="#B59A5A" opacity="0.4" />
    </g>
    
    {/* Shield in center */}
    <path d="M50 35 L70 45 L70 70 L50 85 L30 70 L30 45 Z" stroke="#7A8F7A" strokeWidth="1.5" fill="#ECE6DA" />
    <path d="M50 40 L50 80" stroke="#B59A5A" strokeWidth="0.5" opacity="0.5" />
    <path d="M35 55 L65 55" stroke="#B59A5A" strokeWidth="0.5" opacity="0.5" />
    <circle cx="50" cy="55" r="8" fill="none" stroke="#6E3B3B" strokeWidth="1" opacity="0.6" />
    <circle cx="50" cy="55" r="3" fill="#6E3B3B" opacity="0.4" />
  </svg>
)

// Floating flowers
const FloatingFlower = ({ className = "", delay = 0 }: { className?: string, delay?: number }) => (
  <svg 
    className={`${className} animate-float`} 
    style={{ animationDelay: `${delay}s` }}
    viewBox="0 0 30 30" 
    fill="none"
  >
    <circle cx="15" cy="15" r="3" fill="#B59A5A" opacity="0.5" />
    <ellipse cx="15" cy="8" rx="3" ry="5" fill="#7A8F7A" opacity="0.3" />
    <ellipse cx="15" cy="22" rx="3" ry="5" fill="#7A8F7A" opacity="0.3" />
    <ellipse cx="8" cy="15" rx="5" ry="3" fill="#7A8F7A" opacity="0.3" />
    <ellipse cx="22" cy="15" rx="5" ry="3" fill="#7A8F7A" opacity="0.3" />
  </svg>
)

export function Philosophy() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section 
      id="philosophy" 
      ref={ref}
      className="py-32 md:py-40 bg-parchment-dark relative overflow-hidden scroll-snap-start"
    >
      {/* Floating decorative flowers */}
      <FloatingFlower className="absolute top-20 left-12 w-8 h-8" delay={0} />
      <FloatingFlower className="absolute top-32 right-16 w-6 h-6" delay={1.5} />
      <FloatingFlower className="absolute bottom-24 left-20 w-7 h-7" delay={2.5} />
      <FloatingFlower className="absolute bottom-32 right-24 w-5 h-5" delay={0.5} />
      <FloatingFlower className="absolute top-1/2 left-8 w-6 h-6" delay={3} />
      <FloatingFlower className="absolute top-1/2 right-8 w-8 h-8" delay={2} />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Emblem at top */}
        <div 
          className={`flex justify-center mb-8 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <SwordShieldEmblem />
        </div>
        
        <div 
          className={`transition-all duration-1000 ease-out delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
            THE VOW
          </p>
          
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink italic leading-relaxed relative">
            <span className="absolute -left-4 -top-4 text-6xl text-gold/20 font-serif">"</span>
            Security is the practice of attention.
            <span className="absolute -right-4 -bottom-4 text-6xl text-gold/20 font-serif">"</span>
          </blockquote>
          
          <div className={`gold-divider w-24 mx-auto mt-12 ${isInView ? 'animate-draw-line' : ''}`} style={{ animationDelay: '0.8s' }} />
        </div>
      </div>
    </section>
  )
}
