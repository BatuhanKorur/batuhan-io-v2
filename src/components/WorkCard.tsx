'use client'
import type { ReactNode } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface WorkCardProps {
  title: string
  date?: string
  pos?: string
  logo?: string
  children: ReactNode
}
export default function WorkCard({ title, date = '', pos = '', children, logo = '' }: WorkCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full space-x-3.5" onClick={handleToggle}>
        <Avatar className="size-11 shrink-0">
          <AvatarImage src={logo}></AvatarImage>
          <AvatarFallback>{title && title.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <div className="flex items-center">
            <div className="flex flex-grow justify-between h-5.5">
              <p className="text-[15px] font-semibold">{ title }</p>
              <p className="text-[15px] opacity-80">{ date }</p>
            </div>
            <div className="shrink-0 w-8 flex items-center justify-end">
              <Icon icon="ion:chevron-forward" />
            </div>
          </div>
          <p className="text-[15px] text-muted-foreground">{ pos }</p>
          <div className="mt-2">
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? 'auto' : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="text-base text-[15px] text-zinc-200">{ children }</p>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  )
}
