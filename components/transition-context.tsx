"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface TransitionContextType {
    isTransitioning: boolean
    setIsTransitioning: (value: boolean) => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false)

    return (
        <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
            {children}
        </TransitionContext.Provider>
    )
}

export function useTransitionContext() {
    const context = useContext(TransitionContext)
    if (context === undefined) {
        throw new Error('useTransitionContext must be used within a TransitionProvider')
    }
    return context
}
