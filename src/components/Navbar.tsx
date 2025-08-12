'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler'
import { Dock, DockIcon } from '@/components/magicui/dock'
import { Separator } from '@/components/ui/separator'
import { SOCIAL_LINKS } from '@/data'

export function Navbar() {
  return (
    <div
      aria-label="dock-navigation"
      className="pointer-events-none fixed inset-x-0 z-50 bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] flex justify-center"
    >
      <Dock direction="middle" className="pointer-events-auto">
        <DockIcon>
          <Link href="/">
            <Icon icon="ph:house-bold" className="size-6" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link
            href="/cv"
            target="_blank"
            className="font-bold tracking-tighter"
          >
            CV
          </Link>
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <Link
            href={SOCIAL_LINKS.github}
            target="_blank"
            className="font-bold tracking-tighter"
          >
            <Icon icon="mdi:github" className="size-6" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            className="font-bold tracking-tighter"
          >
            <Icon icon="mdi:linkedin" className="size-6" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            className="font-bold tracking-tighter"
          >
            <Icon icon="mdi:instagram" className="size-6" />
          </Link>
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <AnimatedThemeToggler className="cursor-pointer" />
        </DockIcon>
      </Dock>
    </div>
  )
}
