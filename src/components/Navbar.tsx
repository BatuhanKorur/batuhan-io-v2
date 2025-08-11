'use client'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import { Dock, DockIcon } from '@/components/magicui/dock'
import { Separator } from '@/components/ui/separator'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  return (
    <div
      aria-label="dock-navigation"
      className="pointer-events-none fixed inset-x-0 z-50 bottom-[calc(env(safe-area-inset-bottom)+1rem)] flex justify-center"
    >
      <Dock direction="middle" className="pointer-events-auto">
        <DockIcon>
          <Icon icon="lucide:heart" />
        </DockIcon>
        <DockIcon>
          <p>CV</p>
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <Icon icon="lucide:book" />
        </DockIcon>
        <DockIcon>
          <Icon icon="lucide:briefcase" />
        </DockIcon>
        <DockIcon>
          <Icon icon="lucide:briefcase" />
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
        <DockIcon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark'
            ? (
                <Icon icon="ion:moon-outline" />
              )
            : (<Icon icon="ion:sunny-outline" />)}
        </DockIcon>
      </Dock>
    </div>
  )
}
