"use client"

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { MedievalFrame } from '@/components/medieval-decorations'

const certifications = [
  { name: "Phishing Analyzer", issuer: "LetsDefend", date: "Dec 2025" },
  { name: "Cyber Kill Chain", issuer: "LetsDefend", date: "Nov 2025" },
  { name: "MITRE ATT&CK Framework", issuer: "LetsDefend", date: "Nov 2025" },
  { name: "Phishing Expert", issuer: "LetsDefend", date: "Nov 2025" },
  { name: "SOC Member", issuer: "LetsDefend", date: "Oct 2025" },
  { name: "Secure Networking", issuer: "L&T EduTech", date: "Feb 2025" },
  { name: "Linux Administration", issuer: "L&T EduTech", date: "May 2024" },
  { name: "Linux Commands & Shell Scripting", issuer: "edX", date: "May 2024" },
  { name: "Generative AI for Business Leaders", issuer: "edX", date: "Apr 2024" },
  { name: "Cybersecurity Roles & OS Security", issuer: "edX", date: "Apr 2024" },
  { name: "Java (Basic)", issuer: "HackerRank", date: "Mar 2024" },
];

const skills = [
  "Network Traffic Analysis", "Linux Log Monitoring", "Windows Event Log Analysis",
  "Vulnerability Assessment", "Cyber Kill Chain", "MITRE ATT&CK Mapping",
  "IOC Identification", "Web Attack Detection", "Phishing Analysis", "Threat Triage",
  "Incident Response", "SIEM", "Security Monitoring", "Bug Hunting",
  "Penetration Testing", "Red Teaming",
  "Python", "Bash", "Java", "C", "Wireshark", "Metasploit", "Nmap", "Burp Suite"
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative min-h-screen">
      <Navigation />

      <section id="about" className="relative min-h-screen pt-24 pb-16">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div
            className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-zinc-400 mb-4 font-semibold">
              // ABOUT
            </p>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About me
            </h1>
            <div className="w-24 h-px bg-zinc-700" />
          </div>

          {/* Main Content */}
          <div className="space-y-12">

            {/* Biography */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <MedievalFrame title="Profile">
                <div className="bg-transparent p-2">
                  <p className="font-sans text-base md:text-lg leading-relaxed text-zinc-300 mb-6">
                    Currently pursuing a Bachelor of Technology in Computer Science with a specialization in Cyber Security at JNTU Anantapur affiliation Sri Venkateswara College of Engineering and Technology, Chittoor, with an expected graduation date in 2026. Academic focus includes network traffic analysis, Linux log monitoring, and Windows event log analysis, supported by certifications in Java, cybersecurity roles, and generative AI.
                  </p>
                  <p className="font-sans text-base md:text-lg leading-relaxed text-zinc-300">
                    Recently completed a Cyber Security Internship at the <span className="text-zinc-100 font-semibold">Institute Of Innovative Design and Technology (IIDT)</span>, gaining hands-on experience in critical areas of cybersecurity. Motivated to deepen expertise in securing systems and analyzing vulnerabilities while contributing to innovative solutions in the field. Fluent in English, Nepali, and German.
                  </p>
                </div>
              </MedievalFrame>
            </div>

            {/* Education */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h2 className="font-sans text-2xl font-bold text-white mb-6">Education</h2>
              <MedievalFrame className="mb-6">
                <div className="flex flex-col gap-4">
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <h3 className="text-lg font-semibold text-zinc-100">JNTU Anantapur Affiliation</h3>
                    <p className="text-zinc-400 text-sm">Bachelor of Technology - BTech, Computer Science (Cyber Security)</p>
                    <p className="text-zinc-500 text-xs font-mono mt-1">2022 - 2026</p>
                  </div>
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <h3 className="text-lg font-semibold text-zinc-100">Sri Venkateswara College of Engineering and Technology, Chittoor</h3>
                    <p className="text-zinc-400 text-sm">Bachelor of Technology - BTech, Computer Science and Technology (Cyber Security)</p>
                  </div>
                </div>
              </MedievalFrame>
            </div>

            {/* Skills */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h2 className="font-sans text-2xl font-bold text-white mb-6">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 rounded bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-200 font-mono hover:border-zinc-500 hover:bg-zinc-700/80 transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h2 className="font-sans text-2xl font-bold text-white mb-6">Certifications</h2>
              <MedievalFrame>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex flex-col p-3 rounded hover:bg-zinc-800/30 transition-colors">
                      <span className="text-sm font-semibold text-zinc-200">{cert.name}</span>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-zinc-400">{cert.issuer}</span>
                        <span className="text-[10px] text-zinc-600 font-mono">{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </MedievalFrame>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
