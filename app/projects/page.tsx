"use client"

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { MedievalFrame } from '@/components/medieval-decorations'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  tech: string[]
  problem: string
  approach: string
  outcome: string
  image: string
}

const projects: Project[] = [
  {
    id: "01",
    title: "Vulnerability Scanner",
    tech: ["Python", "Metasploit", "Nmap"],
    problem: "Manual vulnerability assessment was time-consuming and error-prone.",
    approach: "Automated scanner integrating Nmap with Metasploit for unified security assessment.",
    outcome: "Reduced assessment time by 60%. Detected 15+ security flaws in enterprise simulations.",
    image: "/assets/project-scanner.png"
  },
  {
    id: "02",
    title: "Server Infrastructure",
    tech: ["Active Directory", "Group Policy", "VirtualBox"],
    problem: "Inconsistent security policies creating authentication vulnerabilities.",
    approach: "Configured AD with comprehensive GPOs for security hardening.",
    outcome: "Successfully simulated multi-user enterprise environment with enforced baselines.",
    image: "/assets/project-server.png"
  },
  {
    id: "03",
    title: "Malware Classification",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    problem: "Slow detection of zero-day malware signatures.",
    approach: "Deep learning model analyzing portable executable headers for anomaly detection.",
    outcome: "Achieved 94% accuracy in classifying unseen malware samples.",
    image: "/assets/project-malware.png"
  },
  {
    id: "04",
    title: "Keylogger",
    tech: ["C++", "Windows API", "Cryptography"],
    problem: "Need for specialized monitoring tools for red-teaming engagements.",
    approach: "Low-level keyboard hook implementation with stealth log encryption.",
    outcome: "Undetected by standard AV solutions during authorized penetration tests.",
    image: "/assets/project-keylogger.png"
  }
]

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative min-h-screen">
      <Navigation />

      <section id="projects" className="relative min-h-screen pt-24 pb-16">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-zinc-400 mb-4 font-semibold">
              // PROJECTS
            </p>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Projects
            </h1>
            <div className="w-24 h-px bg-zinc-700 mx-auto" />
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <MedievalFrame className="p-0 border-none bg-transparent" title={`PROJECT ${project.id}`}>
                  <div className="bg-card border border-zinc-800 rounded-lg p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 hover:border-zinc-700 transition-colors duration-500 group">

                    {/* Visual / Image */}
                    <div className="w-full lg:w-5/12 aspect-video bg-black/50 rounded-md border border-zinc-800 overflow-hidden relative group-hover:border-zinc-600 transition-colors duration-500">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-sans text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h3>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-1 bg-zinc-800/80 border border-zinc-600 text-xs font-mono text-zinc-200 rounded hover:border-zinc-500 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-5">
                        <div>
                          <p className="font-mono text-[11px] uppercase text-zinc-400 mb-2 tracking-wider font-semibold">PROBLEM</p>
                          <p className="font-sans text-sm text-zinc-200 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[11px] uppercase text-zinc-400 mb-2 tracking-wider font-semibold">APPROACH</p>
                          <p className="font-sans text-sm text-zinc-200 leading-relaxed">
                            {project.approach}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[11px] uppercase text-zinc-400 mb-2 tracking-wider font-semibold">OUTCOME</p>
                          <p className="font-sans text-sm text-zinc-200 leading-relaxed">
                            {project.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </MedievalFrame>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <a
              href="https://github.com/Aabhash-Paudel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 rounded-lg font-sans text-sm tracking-wider uppercase hover:bg-zinc-800 hover:border-zinc-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
            >
              <span>View All Projects on GitHub</span>
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
