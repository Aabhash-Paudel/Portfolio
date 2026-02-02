"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface TransitionContextType {
    isTransitioning: boolean
    setIsTransitioning: (value: boolean) => void
    isInitialLoad: boolean
    setInitialLoadComplete: () => void
    triggerPageTransition: () => void
    isPageTransitionActive: boolean
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isInitialLoad, setIsInitialLoad] = useState(true)
    const [isPageTransitionActive, setIsPageTransitionActive] = useState(false)

    const setInitialLoadComplete = useCallback(() => {
        setIsInitialLoad(false)
    }, [])

    const triggerPageTransition = useCallback(() => {
        setIsPageTransitionActive(true)
        // Reset after animation completes
        setTimeout(() => {
            setIsPageTransitionActive(false)
        }, 2200) // Match total animation duration
    }, [])

    return (
        <TransitionContext.Provider value={{ 
            isTransitioning, 
            setIsTransitioning, 
            isInitialLoad, 
            setInitialLoadComplete,
            triggerPageTransition,
            isPageTransitionActive
        }}>
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
