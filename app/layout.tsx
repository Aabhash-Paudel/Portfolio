import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Panda3D } from '@/components/panda-3d'
import { Butterflies as Spiders } from '@/components/butterflies'
import { CurtainTransition } from '@/components/curtain-transition'
import { TransitionProvider } from '@/components/transition-context'
import { SmoothScroller } from '@/components/smooth-scroller'
import { CursorGlow } from '@/components/cursor-glow'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-display'
});

export const metadata: Metadata = {
  title: 'Portfolio | Cybersecurity & Development',
  description: 'Cybersecurity Analyst and Developer Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
        <TransitionProvider>
          <SmoothScroller />
          {/* ScrollNavigator removed */}
          <CursorGlow />
          <CurtainTransition />
          <RestrictedContent>
            {children}
          </RestrictedContent>
          <Spiders />
          <Panda3D />
        </TransitionProvider>
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/20 via-background to-background" />
        <Analytics />
      </body>
    </html>
  )
}

function RestrictedContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
