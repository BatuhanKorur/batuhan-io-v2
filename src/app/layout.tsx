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
  metadataBase: new URL('https://batuhan.io'),
  title: 'Batuhan Korur - Full Stack Developer',
  description: 'Full-Stack Developer with 10+ years of experience, specialising in TypeScript, React, Next, Vue, Node.js, and SQL.',
  applicationName: 'Batuhan Korur Portfolio',
  authors: [
    {
      name: 'Batuhan Korur',
      url: 'https://batuhan.io',
    },
  ],
  creator: 'Batuhan Korur',
  publisher: 'Batuhan Korur',
  keywords: [
    'Full‑Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Vue Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Node.js',
    'SQL',
    'Frontend',
    'Backend',
    'Portfolio',
    'Freelance Developer',
    'Remote Developer',
  ],
  alternates: {
    canonical: 'https://batuhan.io',
  },
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    type: 'website',
    url: 'https://batuhan.io',
    siteName: 'Batuhan Korur',
    title: 'Batuhan Korur - Full Stack Developer',
    description: 'Full-Stack Developer with 10+ years of experience, specialising in TypeScript, React, Next, Vue, Node.js, and SQL.',
    locale: 'en_US',
    images: [
      {
        url: 'https://batuhan.io/android-chrome-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Batuhan Korur – Profile and Portfolio Preview',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@batuhankorur',
    creator: '@batuhankorur',
    title: 'Batuhan Korur – Full‑Stack Developer',
    description:
        'Full‑Stack Developer specialising in TypeScript, React, Next.js, Vue, Node.js, and SQL.',
    images: ['https://batuhan.io/android-chrome-512x512.png'],
  },
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
