"use client"

import { useInView } from '@/hooks/use-in-view'

// Visual diagrams for each project
const VulnScannerDiagram = () => (
  <div className="relative w-full h-full bg-parchment-dark/50 p-4 flex items-center justify-center">
    <svg viewBox="0 0 200 150" className="w-full h-full max-h-48">
      {/* Network nodes */}
      <circle cx="40" cy="30" r="12" fill="none" stroke="#7A8F7A" strokeWidth="1" />
      <circle cx="160" cy="30" r="12" fill="none" stroke="#7A8F7A" strokeWidth="1" />
      <circle cx="40" cy="120" r="12" fill="none" stroke="#7A8F7A" strokeWidth="1" />
      <circle cx="160" cy="120" r="12" fill="none" stroke="#7A8F7A" strokeWidth="1" />
      
      {/* Central scanner */}
      <rect x="75" y="55" width="50" height="40" fill="none" stroke="#B59A5A" strokeWidth="1.5" />
      <text x="100" y="78" textAnchor="middle" fill="#B59A5A" fontSize="8" fontFamily="serif">SCAN</text>
      
      {/* Connection lines with animation */}
      <line x1="52" y1="30" x2="75" y2="65" stroke="#6B6B6B" strokeWidth="0.5" strokeDasharray="3,3">
        <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="148" y1="30" x2="125" y2="65" stroke="#6B6B6B" strokeWidth="0.5" strokeDasharray="3,3">
        <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="52" y1="120" x2="75" y2="95" stroke="#6B6B6B" strokeWidth="0.5" strokeDasharray="3,3">
        <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="148" y1="120" x2="125" y2="95" stroke="#6B6B6B" strokeWidth="0.5" strokeDasharray="3,3">
        <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1s" repeatCount="indefinite" />
      </line>
      
      {/* Alert indicators */}
      <circle cx="160" cy="30" r="4" fill="#6E3B3B" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
)

const InfraDiagram = () => (
  <div className="relative w-full h-full bg-parchment-dark/50 p-4 flex items-center justify-center">
    <svg viewBox="0 0 200 150" className="w-full h-full max-h-48">
      {/* Server tower */}
      <rect x="80" y="20" width="40" height="60" fill="none" stroke="#7A8F7A" strokeWidth="1" />
      <line x1="85" y1="35" x2="115" y2="35" stroke="#7A8F7A" strokeWidth="0.5" />
      <line x1="85" y1="50" x2="115" y2="50" stroke="#7A8F7A" strokeWidth="0.5" />
      <line x1="85" y1="65" x2="115" y2="65" stroke="#7A8F7A" strokeWidth="0.5" />
      <text x="100" y="28" textAnchor="middle" fill="#B59A5A" fontSize="6">AD</text>
      
      {/* Shield icon */}
      <path d="M100 90 L100 130 M85 105 L115 105" stroke="#B59A5A" strokeWidth="1.5" />
      <path d="M100 95 L115 102 L115 118 L100 125 L85 118 L85 102 Z" fill="none" stroke="#B59A5A" strokeWidth="1">
        <animate attributeName="stroke-opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
      </path>
      
      {/* Users */}
      <circle cx="30" cy="75" r="8" fill="none" stroke="#6B6B6B" strokeWidth="0.5" />
      <circle cx="170" cy="75" r="8" fill="none" stroke="#6B6B6B" strokeWidth="0.5" />
      <circle cx="30" cy="75" r="2" fill="#6B6B6B" />
      <circle cx="170" cy="75" r="2" fill="#6B6B6B" />
      
      {/* Connections */}
      <line x1="40" y1="75" x2="80" y2="50" stroke="#6B6B6B" strokeWidth="0.5" />
      <line x1="160" y1="75" x2="120" y2="50" stroke="#6B6B6B" strokeWidth="0.5" />
    </svg>
  </div>
)

const DataAlertDiagram = () => (
  <div className="relative w-full h-full bg-parchment-dark/50 p-4 flex items-center justify-center">
    <svg viewBox="0 0 200 150" className="w-full h-full max-h-48">
      {/* Data streams */}
      <rect x="20" y="40" width="50" height="70" fill="none" stroke="#7A8F7A" strokeWidth="1" rx="2" />
      <rect x="130" y="40" width="50" height="70" fill="none" stroke="#7A8F7A" strokeWidth="1" rx="2" />
      
      {/* Data rows */}
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x="25" y={50 + i * 14} width="40" height="10" fill="#ECE6DA" stroke="#D4CFC4" strokeWidth="0.5" />
          <rect x="135" y={50 + i * 14} width="40" height="10" fill="#ECE6DA" stroke="#D4CFC4" strokeWidth="0.5" />
        </g>
      ))}
      
      {/* Duplicate highlight */}
      <rect x="25" y="64" width="40" height="10" fill="#B59A5A" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="135" y="64" width="40" height="10" fill="#B59A5A" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </rect>
      
      {/* Connection arrow */}
      <path d="M75 75 L125 75" stroke="#B59A5A" strokeWidth="1" strokeDasharray="4,2">
        <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.5s" repeatCount="indefinite" />
      </path>
      
      {/* Alert bell */}
      <path d="M100 25 L105 35 L95 35 Z" fill="#6E3B3B">
        <animate attributeName="transform" values="translate(0,0);translate(0,-2);translate(0,0)" dur="0.5s" repeatCount="indefinite" />
      </path>
    </svg>
  </div>
)

// Decorative elements
const FlowerCorner = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none">
    <path d="M0 60 Q30 30 60 0" stroke="#B59A5A" strokeWidth="0.5" opacity="0.3" />
    <circle cx="45" cy="15" r="8" fill="none" stroke="#7A8F7A" opacity="0.2" />
    <circle cx="45" cy="15" r="3" fill="#B59A5A" opacity="0.3" />
    <ellipse cx="45" cy="5" rx="3" ry="5" fill="#7A8F7A" opacity="0.2" />
    <ellipse cx="45" cy="25" rx="3" ry="5" fill="#7A8F7A" opacity="0.2" />
    <ellipse cx="35" cy="15" rx="5" ry="3" fill="#7A8F7A" opacity="0.2" />
    <ellipse cx="55" cy="15" rx="5" ry="3" fill="#7A8F7A" opacity="0.2" />
  </svg>
)

const projects = [
  {
    title: "Vulnerability Scanner",
    fullTitle: "In-Depth Vulnerability Scanner",
    technologies: "Python, Metasploit, Nmap",
    symbol: "V",
    problem: "Manual vulnerability assessment in enterprise networks was time-consuming and prone to human error, leaving critical security gaps undetected.",
    approach: "Developed an automated scanner integrating Nmap for network discovery with Metasploit for vulnerability exploitation testing, creating a unified security assessment pipeline.",
    outcome: "Reduced manual assessment time by 60%. Detected 15+ security flaws in simulated enterprise environments with results logged in structured SOC-style reports.",
    diagram: <VulnScannerDiagram />
  },
  {
    title: "Server Infrastructure",
    fullTitle: "Server Professional Infrastructure",
    technologies: "Active Directory, Group Policy, VirtualBox",
    symbol: "S",
    problem: "Enterprise environments lacked consistent security policies, creating vulnerabilities in user authentication and system configurations.",
    approach: "Configured Active Directory with comprehensive Group Policies for security hardening, implementing strict password policies and authentication rules while disabling insecure configurations.",
    outcome: "Successfully simulated a multi-user enterprise environment with enforced security baselines, demonstrating practical system administration and security implementation skills.",
    diagram: <InfraDiagram />
  },
  {
    title: "Data Alert System",
    fullTitle: "Duplicate Data Alert System",
    technologies: "JavaScript, Data Analysis",
    symbol: "D",
    problem: "Organizations struggled with detecting and managing duplicate data entries, leading to data integrity issues and potential security vulnerabilities.",
    approach: "Built an intelligent alert system capable of identifying duplicate data patterns across datasets, implementing efficient comparison algorithms and notification mechanisms.",
    outcome: "Created during SIH Hackathon, demonstrating ability to rapidly prototype security-focused solutions under time constraints.",
    diagram: <DataAlertDiagram />
  }
]

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-24 md:py-32 bg-parchment-dark relative overflow-hidden scroll-snap-start"
    >
      {/* Decorative flowers */}
      <FlowerCorner className="absolute top-0 right-0 w-20 h-20" />
      <FlowerCorner className="absolute bottom-0 left-0 w-20 h-20 rotate-180" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-20 ${isInView ? 'title-fade-delayed' : 'opacity-0'}`}
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            CASE STUDY ALTARS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink">
            Projects
          </h2>
          <div className={`gold-divider w-32 mx-auto mt-6 ${isInView ? 'animate-draw-line' : ''}`} />
        </div>

        {/* Projects - alternating layout */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            
            return (
              <article
                key={project.title}
                className={`
                  transition-all duration-1000 ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  ${isEven ? 'md:indent-left' : 'md:indent-right'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Split layout */}
                <div className={`
                  flex flex-col gap-6
                  ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}>
                  {/* Diagram side */}
                  <div className="md:w-2/5 relative">
                    <div className="bg-parchment-light border border-border/50 overflow-hidden">
                      {project.diagram}
                    </div>
                    {/* Decorative corner */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r border-b border-gold/30" />
                  </div>
                  
                  {/* Content side */}
                  <div className="md:w-3/5 bg-parchment-light p-8 border border-border/50 relative">
                    {/* Drop cap title */}
                    <div className="flex items-start gap-3 mb-4">
                      <span className="font-serif text-5xl md:text-6xl text-burgundy font-semibold leading-none select-none">
                        {project.symbol}
                      </span>
                      <div className="pt-1">
                        <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink leading-tight">
                          {project.fullTitle.replace(project.symbol, '')}
                        </h3>
                        <p className="font-sans text-xs text-sage mt-1 tracking-wider uppercase">
                          {project.technologies}
                        </p>
                      </div>
                    </div>
                    
                    {/* Symbolic divider */}
                    <div className="flex items-center gap-4 my-6">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                      <span className="text-gold text-xs">&#9670;</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                    </div>
                    
                    {/* Content sections */}
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                          Problem
                        </h4>
                        <p className="font-sans text-sm text-ink/80 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                          Approach
                        </h4>
                        <p className="font-sans text-sm text-ink/80 leading-relaxed">
                          {project.approach}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                          Outcome
                        </h4>
                        <p className="font-sans text-sm text-ink/80 leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
