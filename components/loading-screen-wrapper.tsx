"use client"

import { useTransitionContext } from './transition-context'
import { LoadingScreen } from './loading-screen'

export function LoadingScreenWrapper() {
    const { isInitialLoad, setInitialLoadComplete } = useTransitionContext()

    if (!isInitialLoad) return null

    return <LoadingScreen onComplete={setInitialLoadComplete} />
}
