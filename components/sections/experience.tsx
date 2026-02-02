"use client"

import { useInView } from '@/hooks/use-in-view'

// Decorative elements
const ScrollDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 50" fill="none">
    <path d="M5 10 C5 5 10 5 15 5 L55 5 C55 10 55 15 50 15 L10 15 C5 15 5 20 5 20 L5 40 C5 45 10 45 15 45 L55 45 C55 40 55 35 50 35 L10 35 C5 35 5 30 10 30 L50 30" stroke="#8B7355" strokeWidth="1" fill="#ECE6DA" />
    <path d="M15 22h30M15 26h25" stroke="#6B6B6B" opacity="0.3" />
  </svg>
)

const SwordDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 80" fill="none" stroke="#B59A5A" strokeWidth="1">
    <path d="M10 0 L10 60" />
    <path d="M5 60 L15 60" />
    <path d="M8 60 L8 68 L12 68 L12 60" />
    <path d="M10 68 L10 76" />
    <path d="M7 5 L10 0 L13 5" fill="#B59A5A" opacity="0.3" />
  </svg>
)

const BookStackDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 50 70" fill="none">
    <rect x="5" y="50" width="40" height="8" fill="#8B7355" stroke="#6B6B6B" strokeWidth="0.5" rx="1" />
    <rect x="8" y="40" width="35" height="8" fill="#7A8F7A" stroke="#6B6B6B" strokeWidth="0.5" rx="1" />
    <rect x="3" y="30" width="42" height="8" fill="#6E3B3B" opacity="0.7" stroke="#6B6B6B" strokeWidth="0.5" rx="1" />
    <rect x="10" y="20" width="30" height="8" fill="#B59A5A" opacity="0.6" stroke="#6B6B6B" strokeWidth="0.5" rx="1" />
  </svg>
)

const FlowerDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="4" fill="#B59A5A" opacity="0.5" />
    <ellipse cx="20" cy="10" rx="4" ry="7" fill="#7A8F7A" opacity="0.3" />
    <ellipse cx="20" cy="30" rx="4" ry="7" fill="#7A8F7A" opacity="0.3" />
    <ellipse cx="10" cy="20" rx="7" ry="4" fill="#7A8F7A" opacity="0.3" />
    <ellipse cx="30" cy="20" rx="7" ry="4" fill="#7A8F7A" opacity="0.3" />
  </svg>
)

const experiences = [
  {
    period: "Jul 2024 – Sep 2024",
    title: "Cyber Security Intern",
    organization: "IIIDT with APSHE and Blackbucks Engineering",
    description: [
      "Conducted over 20 penetration tests using Metasploit and Burp Suite",
      "Identified and reported 10+ critical vulnerabilities including SQL injection and authentication misconfigurations",
      "Performed detailed log analysis and network traffic monitoring to trace attack patterns and intrusion attempts"
    ]
  },
  {
    period: "Previous",
    title: "Teacher",
    organization: "Candid Career Secondary School, Nepal",
    description: [
      "Taught Computer Science, Mathematics, and Science to 100+ students (Grades 6–10)",
      "Designed interactive lesson plans integrating IT and Cybersecurity concepts",
      "Provided mentorship to improve students' technical skills"
    ]
  }
]

const education = {
  period: "Nov 2022 – Apr 2026",
  degree: "B.Tech in Computer Science & Engineering",
  specialization: "Cybersecurity Specialization",
  institution: "Sri Venkateswara College of Engineering and Technology",
  affiliation: "Affiliated with JNTU Anantapur",
  gpa: "8.16"
}

const certifications = [
  "SOC Analyst Learning Path (In Progress)",
  "MITRE ATT&CK Framework – LetsDefend",
  "Linux System Administration – L&T Edutech",
  "Secure Networking – L&T Edutech"
]

const awards = [
  "HTB Apocalypse CTF 2025 – Global Rank #173"
]

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-24 md:py-32 bg-parchment paper-texture relative overflow-hidden scroll-snap-start"
    >
      {/* Decorative elements with floating animation */}
      <ScrollDecor className="absolute top-20 left-4 w-16 h-12 md:w-20 md:h-16 opacity-25 -rotate-6 animate-float" />
      <SwordDecor className="absolute bottom-32 right-8 w-5 h-20 md:w-6 md:h-24 opacity-20 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <BookStackDecor className="absolute top-40 right-4 w-12 h-16 opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <FlowerDecor className="absolute bottom-40 left-12 w-10 h-10 animate-float" style={{ animationDelay: '3s' }} />
      <FlowerDecor className="absolute top-60 right-20 w-8 h-8 animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title with delayed fade */}
        <div 
          className={`mb-16 ${isInView ? 'title-fade-delayed' : 'opacity-0'}`}
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            THE CHRONICLES
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink">
            Experience & Education
          </h2>
          <div className={`gold-divider w-32 mt-6 ${isInView ? 'animate-draw-line' : ''}`} />
        </div>

        {/* Work Experience - slightly indented left */}
        <div 
          className={`mb-16 transition-all duration-1000 ease-out delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
            Work Experience
          </h3>
          
          <div className="relative border-l-2 border-gold/40 pl-8 space-y-12 ml-2">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative">
                {/* Timeline dot with glow */}
                <div className="absolute -left-[calc(2rem+5px)] top-0 w-3 h-3 rounded-full bg-gold border-2 border-parchment magic-glow" />
                
                <p className="font-sans text-sm text-muted-foreground mb-1">
                  {exp.period}
                </p>
                <h4 className="font-serif text-xl font-semibold text-ink">
                  {exp.title}
                </h4>
                <p className="font-sans text-sage text-sm mb-4">
                  {exp.organization}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li 
                      key={i} 
                      className="font-sans text-sm text-ink/80 leading-relaxed flex items-start gap-2"
                      style={{ animationDelay: `${(index * 3 + i) * 100}ms` }}
                    >
                      <span className="text-gold mt-1">&#8226;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education - indented right */}
        <div 
          className={`mb-16 transition-all duration-1000 ease-out delay-300 md:ml-8 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
            Education
          </h3>
          
          <div className="bg-parchment-light p-8 border border-border/50 relative">
            {/* Corner flourishes */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-gold/30" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-gold/30" />
            
            <p className="font-sans text-sm text-muted-foreground mb-1">
              {education.period}
            </p>
            <h4 className="font-serif text-xl font-semibold text-ink">
              {education.degree}
            </h4>
            <p className="font-sans text-burgundy text-sm mb-2">
              {education.specialization}
            </p>
            <p className="font-sans text-ink/80">
              {education.institution}
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              {education.affiliation}
            </p>
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="font-sans text-sage">
                GPA: <span className="font-serif font-semibold text-lg text-ink">{education.gpa}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Awards - asymmetric grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div 
            className={`transition-all duration-1000 ease-out delay-400 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="font-sans text-sm text-ink/80 flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#9670;</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div 
            className={`transition-all duration-1000 ease-out delay-500 md:mt-8 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
              Awards
            </h3>
            <ul className="space-y-3">
              {awards.map((award) => (
                <li key={award} className="font-sans text-sm text-ink/80 flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#9733;</span>
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
