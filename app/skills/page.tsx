"use client"

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { MedievalFrame } from '@/components/medieval-decorations'

// Icons
const ShieldIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="3" />
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
  </svg>
)

const FlaskIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M9 3h6M10 3v6.5L4 20h16l-6-10.5V3" />
    <path d="M8 14h8" />
  </svg>
)

const skills = [
  {
    id: 'observation',
    title: 'Observation',
    subtitle: 'Threat Detection',
    icon: <EyeIcon />,
    description: 'Monitoring and detecting threats through vigilant analysis of security events.',
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
    subtitle: 'System Hardening',
    icon: <ShieldIcon />,
    description: 'Fortifying systems through hardening, policies, and proactive protection.',
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
    subtitle: 'Threat Intelligence',
    icon: <FlaskIcon />,
    description: 'Understanding adversaries through frameworks, methodologies, and intelligence.',
    evidence: [
      'Applied MITRE ATT&CK for threat classification',
      'Mapped attacks using Cyber Kill Chain methodology',
      'Performed OWASP Top 10 vulnerability assessments',
      'Conducted forensic analysis on compromised systems'
    ],
    tools: ['MITRE ATT&CK', 'Cyber Kill Chain', 'OWASP', 'Threat Intel']
  }
]

export default function SkillsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative min-h-screen">
      <Navigation />

      <section id="skills" className="relative min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4 font-medium">
              // SKILLS
            </p>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Core Disciplines
            </h1>
            <div className="w-24 h-px bg-zinc-700 mx-auto" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <MedievalFrame className="p-0 border-none bg-transparent" key={skill.id}>
                <div
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`
                      relative bg-card border rounded-lg transition-all duration-500 cursor-pointer group hover:bg-zinc-900
                      ${expandedSkill === skill.id
                        ? 'border-zinc-500 shadow-lg'
                        : 'border-zinc-800 shadow-sm hover:border-zinc-600'}
                    `}
                    onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
                  >
                    <div className="p-6 md:p-8">
                      {/* Icon */}
                      <div className="text-zinc-500 mb-6 group-hover:text-foreground transition-colors duration-500 flex justify-center">
                        {skill.icon}
                      </div>

                      <div className="text-center">
                        <h3 className="font-sans text-xl font-bold text-foreground mb-1">
                          {skill.title}
                        </h3>
                        <p className="font-mono text-xs text-zinc-500 mb-4 font-medium">
                          {skill.subtitle}
                        </p>
                      </div>

                      <p className="font-sans text-sm text-zinc-400 leading-relaxed text-center">
                        {skill.description}
                      </p>

                      {/* Expand indicator */}
                      <div className={`
                        flex items-center justify-center mt-6 text-zinc-600
                        transition-transform duration-300
                        ${expandedSkill === skill.id ? 'rotate-180' : ''}
                      `}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: expandedSkill === skill.id ? '400px' : '0',
                        opacity: expandedSkill === skill.id ? 1 : 0
                      }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 bg-zinc-900/50">
                        <div className="h-px bg-zinc-800 mb-6" />

                        {/* Evidence */}
                        <div className="mb-6">
                          <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-500 mb-3 font-medium">
                            Experience
                          </h4>
                          <ul className="space-y-2">
                            {skill.evidence.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                                <span className="text-zinc-600 mt-0.5">&#8250;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tools */}
                        <div>
                          <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-500 mb-3 font-medium">
                            Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skill.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-3 py-1 text-xs bg-zinc-800/50 border border-zinc-700 text-zinc-300 rounded font-medium"
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
              </MedievalFrame>
            ))}
          </div>

          <div className="mt-24 text-center">
            <a
              href="https://linkedin.com/in/aabhash-paudel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 rounded-lg font-sans text-sm tracking-wider uppercase hover:bg-blue-900/30 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 group"
            >
              <span>Connect with me on LinkedIn</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
