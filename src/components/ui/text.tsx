import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Props { children: ReactNode, className?: string }

export function TextH2({ children, className, ...props }: Props) {
  return (
    <h2 className={cn('text-xl font-[725] tracking-wide font-mono text-foreground mb-1', className)} {...props}>{children}</h2>
  )
}

export function TextH3({ children }: Props) {
  return (
    <h3 className="uppercase font-semibold tracking-wider text-sm text-muted-foreground mb-1">{children}</h3>
  )
}
