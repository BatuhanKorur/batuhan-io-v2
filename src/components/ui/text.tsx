import type { ReactNode } from 'react'

interface Props { children: ReactNode }

export function TextH2({ children }: Props) {
  return (
    <h2 className="text-xl font-[725] tracking-wide font-mono text-foreground">{children}</h2>
  )
}

export function TextH3({ children }: Props) {
  return (
    <h3 className="text-xl font-semibold">{children}</h3>
  )
}

export function TextH4({ children }: Props) {
  return (
    <h4 className="uppercase font-semibold tracking-wider text-sm text-zinc-400 mb-1">{children}</h4>
  )
}
