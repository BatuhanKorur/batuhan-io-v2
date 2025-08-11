'use client'

import { Icon } from '@iconify/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const DELAY = 1750
const IN_Y = -30
const OUT_Y = 40
const ICONS = [
  'vscode-icons:file-type-typescript-official',
  'vscode-icons:file-type-js-official',
  'vscode-icons:file-type-bun',
  'vscode-icons:file-type-node',
  'vscode-icons:file-type-mongo',
  'vscode-icons:file-type-vue',
  'vscode-icons:file-type-pgsql',
]

export default function TechIcons() {
  const prefersReducedMotion = useReducedMotion()

  const [i, setI] = useState(0)

  useEffect(() => {
    if (ICONS.length <= 1)
      return
    const id = setInterval(() => {
      setI(prev => (prev + 1) % ICONS.length)
    }, DELAY)
    return () => clearInterval(id)
  }, [ICONS.length, DELAY])

  return (
    <div
      className="overflow-hidden flex items-center size-6"
      aria-hidden
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={i}
          initial={
            prefersReducedMotion
              ? false
              : { y: IN_Y, opacity: 0.8, filter: 'blur(6px)' }
          }
          animate={
            prefersReducedMotion
              ? { y: 0, opacity: 1, filter: 'blur(0px)' }
              : { y: 0, opacity: 1, filter: 'blur(0px)' }
          }
          exit={
            prefersReducedMotion
              ? { opacity: 0.99 } // near-no-op for reduced motion
              : { y: OUT_Y, opacity: 0.8, filter: 'blur(6px)' }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.01 }
              : { duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }
          }
          className="will-change-[transform,filter,opacity]"
        >
          <Icon icon={ICONS[i]} className="size-6" />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
