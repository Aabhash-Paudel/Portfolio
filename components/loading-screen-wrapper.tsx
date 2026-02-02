"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTransitionContext } from './transition-context'
import { LoadingScreen } from './loading-screen'

export function LoadingScreenWrapper() {
    const pathname = usePathname()
    const { isInitialLoad, setInitialLoadComplete } = useTransitionContext()

    // If not on home page, mark initial load as complete immediately
    useEffect(() => {
        if (isInitialLoad && pathname !== '/') {
            setInitialLoadComplete()
        }
    }, [isInitialLoad, pathname, setInitialLoadComplete])

    // Only show loading screen on home page during initial load
    if (!isInitialLoad || pathname !== '/') {
        return null
    }

    return <LoadingScreen onComplete={setInitialLoadComplete} />
}
