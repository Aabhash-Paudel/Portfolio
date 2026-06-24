import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SOC Analyst in Nepal | Aabhash Paudel Cybersecurity Portfolio',
  description: 'I am Aabhash Paudel, a SOC Analyst based in Nepal with experience in log analysis, SIEM tools, and proactive threat detection.',
}

export default function SocAnalystNepalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
