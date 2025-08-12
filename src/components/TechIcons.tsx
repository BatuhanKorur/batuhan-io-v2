'use client'

import { Icon } from '@iconify/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'

const ROTATION_DELAY_MS = 2000
const ENTER_Y_OFFSET = -30
const EXIT_Y_OFFSET = 40
const ICONS = [
  'vscode-icons:file-type-typescript-official',
  'vscode-icons:file-type-js-official',
  'vscode-icons:file-type-node',
  'vscode-icons:file-type-bun',
  'vscode-icons:file-type-mongo',
  'vscode-icons:file-type-reactjs',
  'vscode-icons:file-type-vue',
  'vscode-icons:file-type-pgsql',
  'vscode-icons:file-type-next',
] as const

const COMMON_ANIMATE = { y: 0, opacity: 1, filter: 'blur(0px)' } as const

export default function TechIcons() {
  const prefersReducedMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)

  const iconsLength = ICONS.length
  const isRotating = iconsLength > 1
  const currentIcon = ICONS[currentIndex]

  useEffect(() => {
    if (!isRotating)
      return

    const id = window.setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % iconsLength)
    }, ROTATION_DELAY_MS)

    return () => window.clearInterval(id)
  }, [iconsLength, isRotating])

  const motionProps = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        initial: false as const,
        animate: COMMON_ANIMATE,
        exit: { opacity: 0.99 }, // near-no-op for reduced motion
        transition: { duration: 0.01 },
      }
    }
    return {
      initial: { y: ENTER_Y_OFFSET, opacity: 0.8, filter: 'blur(16px)' },
      animate: COMMON_ANIMATE,
      exit: { y: EXIT_Y_OFFSET, opacity: 0.8, filter: 'blur(16px)' },
      transition: {
        duration: 0.25,
        ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number],
      },
    }
  }, [prefersReducedMotion])

  return (
    <div className="overflow-hidden flex items-center" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={currentIndex} {...motionProps} className="will-change-[transform,filter,opacity]">
          <Icon icon={currentIcon} className="size-6.5" />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
