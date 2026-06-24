"use client"

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { MedievalFrame } from '@/components/medieval-decorations'

export default function SocAnalystNepalPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <main className="relative min-h-screen">
        <Navigation />

        <section className="relative min-h-screen pt-24 pb-16">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
            {/* Header */}
            <div
              className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <p className="font-mono text-sm tracking-[0.3em] uppercase text-zinc-400 mb-4 font-semibold">
                // SEO FOCUS
              </p>
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                SOC Analyst in Nepal
              </h1>
              <div className="w-24 h-px bg-zinc-700" />
            </div>

            {/* Content */}
            <div className="space-y-12">
              <div
                className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <MedievalFrame>
                  <div className="bg-transparent p-4 space-y-6">
                    <p className="font-sans text-lg text-zinc-300 leading-relaxed">
                      I am <strong className="text-white">Aabhash Paudel</strong>, a dedicated SOC Analyst based in Nepal with hands-on experience in log analysis, SIEM tools, and active threat detection. Cybersecurity in Nepal is growing rapidly, and I am focused on bringing international standards of network defense and incident response to the local tech landscape.
                    </p>

                    <div>
                      <h2 className="text-2xl font-bold text-zinc-100 mb-4">What does a SOC Analyst do?</h2>
                      <p className="text-zinc-300 leading-relaxed mb-4">
                        A Security Operations Center (SOC) Analyst is the frontline defender of an organization's digital infrastructure. We continuously monitor and analyze security systems to detect, investigate, and respond to cyber threats before they can cause damage.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                        <li>Monitoring SIEM (Security Information and Event Management) platforms.</li>
                        <li>Investigating suspicious activities and isolating potential breaches.</li>
                        <li>Analyzing malware and recognizing phishing attempts.</li>
                        <li>Developing incident response strategies and mitigating risks.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-zinc-100 mb-4">My Skills & Expertise</h2>
                      <p className="text-zinc-300 leading-relaxed mb-4">
                        I specialize in creating robust defense mechanisms using industry-standard tools:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                        <li><strong>SIEM & Log Analysis:</strong> Utilizing Splunk and Wazuh to aggregate and analyze vast amounts of network data.</li>
                        <li><strong>Threat Detection:</strong> Applying the MITRE ATT&CK framework and Cyber Kill Chain methodologies.</li>
                        <li><strong>Network Security:</strong> Deep packet inspection using Wireshark and vulnerability scanning via Nmap and Metasploit.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-zinc-100 mb-4">Cybersecurity Projects</h2>
                      <p className="text-zinc-300 leading-relaxed">
                        My practical approach to learning has led me to develop automated vulnerability scanners, duplicate data alert systems, and an AI-driven Alt Malware File Classifier. These projects reflect my commitment to advancing cybersecurity in Nepal and beyond.
                      </p>
                    </div>
                  </div>
                </MedievalFrame>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
