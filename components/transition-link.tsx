"use client"

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTransitionContext } from './transition-context'
import { ComponentProps, MouseEvent } from 'react'

type TransitionLinkProps = ComponentProps<typeof Link>

export function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
    const router = useRouter()
    const pathname = usePathname()
    const { triggerPageTransition, isInitialLoad } = useTransitionContext()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Call original onClick if provided
        onClick?.(e)

        // Don't intercept if:
        // - Default was prevented
        // - It's the same page
        // - It's an external link
        // - Initial load isn't complete
        const hrefString = typeof href === 'string' ? href : href.pathname || ''
        
        if (
            e.defaultPrevented ||
            pathname === hrefString ||
            hrefString.startsWith('http') ||
            hrefString.startsWith('mailto:') ||
            isInitialLoad
        ) {
            return
        }

        e.preventDefault()

        // Trigger the spider transition
        triggerPageTransition()

        // Navigate after a short delay to let the curtain close first
        setTimeout(() => {
            router.push(hrefString)
        }, 600)
    }

    return (
        <Link href={href} onClick={handleClick} {...props}>
            {children}
        </Link>
    )
}
