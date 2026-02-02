"use client"

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTransitionContext } from './transition-context'
import { ComponentProps, MouseEvent } from 'react'

type TransitionLinkProps = ComponentProps<typeof Link>

export function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
    const router = useRouter()
    const pathname = usePathname()
    const { triggerPageTransition } = useTransitionContext()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Call original onClick if provided
        onClick?.(e)

        const hrefString = typeof href === 'string' ? href : href.pathname || ''
        
        // Don't intercept if:
        // - Default was prevented
        // - It's the same page
        // - It's an external link
        if (
            e.defaultPrevented ||
            pathname === hrefString ||
            hrefString.startsWith('http') ||
            hrefString.startsWith('mailto:')
        ) {
            return
        }

        e.preventDefault()

        // Trigger the spider transition
        triggerPageTransition()

        // Navigate after a short delay to let the curtain appear first
        setTimeout(() => {
            router.push(hrefString)
        }, 400)
    }

    return (
        <Link href={href} onClick={handleClick} {...props}>
            {children}
        </Link>
    )
}
