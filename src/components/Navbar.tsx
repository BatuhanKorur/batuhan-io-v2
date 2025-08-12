'use client'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Dock, DockIcon } from '@/components/magicui/dock'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { SOCIAL_LINKS } from '@/data'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  return (
    <div
      aria-label="dock-navigation"
      className="pointer-events-none fixed inset-x-0 z-50 bottom-[calc(env(safe-area-inset-bottom)+1rem)] flex justify-center"
    >
      <Dock direction="middle" className="pointer-events-auto">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/">
              <DockIcon>
                <Icon icon="ph:house-bold" className="size-6" />
              </DockIcon>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon>
              <Link href="/cv.pdf" target="_blank" className="font-bold tracking-tighter">
                CV
              </Link>
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent>
            <p>Resume</p>
          </TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="h-full" />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon>
              <Link href={SOCIAL_LINKS.github} target="_blank" className="font-bold tracking-tighter">
                <Icon icon="mdi:github" className="size-6" />
              </Link>
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon>
              <Link href={SOCIAL_LINKS.linkedin} target="_blank" className="font-bold tracking-tighter">
                <Icon icon="mdi:linkedin" className="size-6" />
              </Link>
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent>
            <p>Linkedin</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon>
              <Link href={SOCIAL_LINKS.instagram} target="_blank" className="font-bold tracking-tighter">
                <Icon icon="mdi:instagram" className="size-6" />
              </Link>
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent>
            <p>Instagram</p>
          </TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="h-full" />
        <DockIcon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark'
            ? (
                <Icon icon="ion:moon-outline" className="size-5" />
              )
            : (<Icon icon="ion:sunny-outline" className="size-5" />)}
        </DockIcon>
      </Dock>
    </div>
  )
}
