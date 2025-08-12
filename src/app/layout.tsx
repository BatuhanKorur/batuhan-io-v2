import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Albert_Sans, JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { cn } from '@/lib/utils'
import './globals.css'

const fontSans = Albert_Sans({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-albert-sans',
  display: 'swap',
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Batuhan Korur - Full Stack Developer',
  description: 'Full-Stack Developer with 10+ years of experience, specialising in TypeScript, React, Next, Vue, Node.js, and SQL.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto px-6 py-12 md:py-24',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
