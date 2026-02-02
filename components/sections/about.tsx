"use client"

import { useInView } from '@/hooks/use-in-view'

// Decorative elements
const BookDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 50 60" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M5 5h40v50H5z" fill="#ECE6DA" stroke="#8B7355" />
    <path d="M10 5v50" stroke="#8B7355" opacity="0.5" />
    <path d="M15 15h25M15 25h25M15 35h20M15 45h15" stroke="#6B6B6B" opacity="0.3" />
    <circle cx="35" cy="48" r="3" fill="#B59A5A" opacity="0.4" />
  </svg>
)

const QuillDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 30 80" fill="none">
    <path d="M15 0 C25 20 20 40 15 80" stroke="#8B7355" strokeWidth="2" fill="none" />
    <path d="M15 0 C10 10 5 15 2 20 C5 25 10 30 15 35" fill="#F4EFE6" stroke="#8B7355" strokeWidth="1" />
    <path d="M14 75 L16 75 L15 80 Z" fill="#2B2B2B" />
  </svg>
)

const FlowerVine = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 200" fill="none">
    <path d="M50 0 Q30 50 50 100 Q70 150 50 200" stroke="#7A8F7A" strokeWidth="1" opacity="0.4" />
    <circle cx="35" cy="40" r="6" fill="#7A8F7A" opacity="0.3" />
    <circle cx="35" cy="40" r="2" fill="#B59A5A" opacity="0.5" />
    <circle cx="60" cy="80" r="5" fill="#7A8F7A" opacity="0.25" />
    <circle cx="60" cy="80" r="2" fill="#B59A5A" opacity="0.4" />
    <circle cx="40" cy="130" r="7" fill="#7A8F7A" opacity="0.3" />
    <circle cx="40" cy="130" r="2.5" fill="#B59A5A" opacity="0.5" />
    <circle cx="55" cy="170" r="4" fill="#7A8F7A" opacity="0.2" />
    <circle cx="55" cy="170" r="1.5" fill="#B59A5A" opacity="0.4" />
  </svg>
)

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 md:py-32 bg-parchment-dark relative overflow-hidden scroll-snap-start"
    >
      {/* Floating decorative elements */}
      <BookDecor className="absolute top-20 right-12 w-12 h-14 text-sage/30 animate-float" style={{ animationDelay: '0.5s' }} />
      <QuillDecor className="absolute bottom-32 left-8 w-8 h-20 opacity-25 animate-float -rotate-12" style={{ animationDelay: '1.5s' }} />
      <FlowerVine className="absolute top-0 left-4 w-16 h-40 opacity-40" />
      <FlowerVine className="absolute bottom-0 right-8 w-12 h-32 opacity-30 rotate-180" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title with delayed fade */}
        <div 
          className={`mb-12 ${isInView ? 'title-fade-delayed' : 'opacity-0'}`}
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            THE CODEX
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink">
            About
          </h2>
          <div className={`gold-divider w-24 mt-6 ${isInView ? 'animate-draw-line' : ''}`} />
        </div>
        
        {/* Content with asymmetric layout */}
        <div 
          className={`transition-all duration-1000 ease-out delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative md:ml-8">
            {/* Gold accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/60 via-gold/30 to-transparent hidden md:block" />
            
            <div className="bg-parchment-light p-8 md:p-12 md:pl-16 border border-border/30 relative">
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-gold/40" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-gold/40" />
              
              <p className="drop-cap font-sans text-lg md:text-xl leading-relaxed text-ink/90">
                I study how systems behave, how they fail, and how they can be protected through careful observation and structured defense. As a Cybersecurity Engineer with expertise in vulnerability assessment, penetration testing, and security operations, I approach digital security the way medieval architects approached their craft — with patience, precision, and an unwavering commitment to building structures that endure.
              </p>
              
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <span className="text-gold text-xs">&#9830;</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
              
              <p className="font-sans text-lg md:text-xl leading-relaxed text-ink/90 md:pl-8">
                My work spans from conducting penetration tests and identifying critical vulnerabilities to performing detailed log analysis and network traffic monitoring. I believe that true security comes not from reactive measures, but from understanding the nature of threats and building defenses that anticipate them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
