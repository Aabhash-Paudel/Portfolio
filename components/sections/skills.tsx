"use client"

import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'

// Pillar icons - Shield (Defense), Eye (Observation), Flask (Analysis)
const ShieldIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
    <circle cx="12" cy="12" r="3" />
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
  </svg>
)

const FlaskIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
    <path d="M9 3h6M10 3v6.5L4 20h16l-6-10.5V3" />
    <path d="M8 14h8" />
  </svg>
)

// Decorative medieval elements
const SwordDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 80" fill="none" stroke="currentColor" strokeWidth={1}>
    <path d="M12 0v60M8 60h8M12 60v8M10 68h4M12 68v4" />
    <path d="M8 8l4-4 4 4" fill="currentColor" opacity={0.3} />
  </svg>
)

const FlowerDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="4" fill="#B59A5A" opacity={0.6} />
    <ellipse cx="20" cy="10" rx="4" ry="6" fill="#7A8F7A" opacity={0.4} />
    <ellipse cx="20" cy="30" rx="4" ry="6" fill="#7A8F7A" opacity={0.4} />
    <ellipse cx="10" cy="20" rx="6" ry="4" fill="#7A8F7A" opacity={0.4} />
    <ellipse cx="30" cy="20" rx="6" ry="4" fill="#7A8F7A" opacity={0.4} />
    <ellipse cx="12" cy="12" rx="4" ry="5" fill="#7A8F7A" opacity={0.3} transform="rotate(-45 12 12)" />
    <ellipse cx="28" cy="12" rx="4" ry="5" fill="#7A8F7A" opacity={0.3} transform="rotate(45 28 12)" />
    <ellipse cx="12" cy="28" rx="4" ry="5" fill="#7A8F7A" opacity={0.3} transform="rotate(45 12 28)" />
    <ellipse cx="28" cy="28" rx="4" ry="5" fill="#7A8F7A" opacity={0.3} transform="rotate(-45 28 28)" />
  </svg>
)

const BookDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth={1}>
    <path d="M5 5h30v40H5z" fill="#ECE6DA" />
    <path d="M5 5h30v40H5z" />
    <path d="M10 5v40" opacity={0.5} />
    <path d="M15 15h15M15 22h15M15 29h10" opacity={0.3} />
  </svg>
)

const pillars = [
  {
    id: 'observation',
    title: 'Observation',
    subtitle: 'The Watchful Eye',
    icon: <EyeIcon />,
    shortDesc: 'Monitoring and detecting threats through vigilant analysis of security events.',
    evidence: [
      'Investigated 20+ security alerts daily in SOC environment',
      'Correlated logs across Splunk, ELK Stack, Security Onion',
      'Reduced false positive rate through pattern recognition',
      'Real-time threat hunting and anomaly detection'
    ],
    tools: ['Splunk', 'ELK Stack', 'Security Onion', 'Wireshark']
  },
  {
    id: 'defense',
    title: 'Defense',
    subtitle: 'The Iron Shield',
    icon: <ShieldIcon />,
    shortDesc: 'Fortifying systems through hardening, policies, and proactive protection.',
    evidence: [
      'Configured Active Directory with comprehensive GPOs',
      'Implemented multi-factor authentication systems',
      'Hardened Windows and Linux server environments',
      'Designed network segmentation strategies'
    ],
    tools: ['Active Directory', 'Group Policy', 'Firewall', 'IDS/IPS']
  },
  {
    id: 'analysis',
    title: 'Analysis',
    subtitle: 'The Deep Study',
    icon: <FlaskIcon />,
    shortDesc: 'Understanding adversaries through frameworks, methodologies, and intelligence.',
    evidence: [
      'Applied MITRE ATT&CK for threat classification',
      'Mapped attacks using Cyber Kill Chain methodology',
      'Performed OWASP Top 10 vulnerability assessments',
      'Conducted forensic analysis on compromised systems'
    ],
    tools: ['MITRE ATT&CK', 'Cyber Kill Chain', 'OWASP', 'Threat Intel']
  }
]

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null)

  const togglePillar = (id: string) => {
    setExpandedPillar(expandedPillar === id ? null : id)
  }

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-24 md:py-32 bg-parchment paper-texture relative overflow-hidden scroll-snap-start"
    >
      {/* Decorative elements */}
      <SwordDecor className="absolute top-20 left-8 w-6 h-20 text-gold/20 animate-float" />
      <SwordDecor className="absolute top-32 right-12 w-6 h-20 text-gold/15 animate-float" style={{ animationDelay: '2s' }} />
      <FlowerDecor className="absolute bottom-20 left-20 w-12 h-12 animate-float" style={{ animationDelay: '1s' }} />
      <FlowerDecor className="absolute top-40 right-32 w-10 h-10 animate-float" style={{ animationDelay: '3s' }} />
      <BookDecor className="absolute bottom-32 right-16 w-10 h-12 text-sage/30 animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title with delayed fade */}
        <div 
          className={`text-center mb-20 ${isInView ? 'title-fade-delayed' : 'opacity-0'}`}
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            THE CRAFT PILLARS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink">
            Disciplines of the Guardian
          </h2>
          <div className={`gold-divider w-32 mx-auto mt-6 ${isInView ? 'animate-draw-line' : ''}`} />
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`
                transition-all duration-700 ease-out
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Pillar Card */}
              <div 
                className={`
                  relative bg-parchment-dark/80 border border-gold/20 
                  arch-top cursor-pointer group
                  transition-all duration-500
                  ${expandedPillar === pillar.id ? 'magic-glow' : 'hover:border-gold/40'}
                `}
                onClick={() => togglePillar(pillar.id)}
              >
                {/* Gold inlay on edges */}
                <div className="absolute inset-0 arch-top border-2 border-transparent bg-gradient-to-b from-gold/10 to-transparent pointer-events-none" />
                
                {/* Main content */}
                <div className="p-8 text-center">
                  {/* Icon with ink spread effect on hover */}
                  <div className="text-sage mb-4 flex justify-center group-hover:text-gold transition-colors duration-500">
                    {pillar.icon}
                  </div>
                  
                  <h3 className="font-serif text-2xl font-semibold text-ink mb-1">
                    {pillar.title}
                  </h3>
                  <p className="font-serif text-sm text-gold italic mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                    {pillar.shortDesc}
                  </p>
                  
                  {/* Expand indicator */}
                  <div className={`
                    flex items-center justify-center gap-2 text-xs text-muted-foreground
                    transition-transform duration-300
                    ${expandedPillar === pillar.id ? 'rotate-180' : ''}
                  `}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expandable content - manuscript section */}
                <div 
                  className="pillar-content"
                  style={{ 
                    maxHeight: expandedPillar === pillar.id ? '500px' : '0',
                    opacity: expandedPillar === pillar.id ? 1 : 0
                  }}
                >
                  <div className="px-8 pb-8">
                    <div className="gold-divider mb-6" />
                    
                    {/* Evidence bullets */}
                    <div className="mb-6">
                      <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-sage mb-3">
                        Evidence
                      </h4>
                      <ul className="space-y-2">
                        {pillar.evidence.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="text-gold mt-1">&#8226;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tools */}
                    <div>
                      <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-sage mb-3">
                        Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pillar.tools.map((tool) => (
                          <span 
                            key={tool}
                            className="px-2 py-1 text-xs bg-parchment-light border border-border/50 text-ink/70"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
