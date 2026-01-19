import { motion, useReducedMotion } from 'motion/react'
import { deepmerge } from 'deepmerge-ts'

import type { MotionProps } from 'motion/react'
import React from 'react'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const ContentWrapper = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string } & MotionProps
>(({ children, className, ...props }, ref) => {
  const shouldReduceMotion = useReducedMotion()

  const defaultProps: MotionProps = {
    layout: 'position',
    initial: {
      opacity: 0,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)'
    },
    animate: {
      opacity: 1,
      filter: shouldReduceMotion ? 'none' : 'blur(0px)'
    },
    exit: {
      opacity: 0,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)',
      transition: { duration: 0.15 }
    },
    style: { transform: 'translateZ(0)', backfaceVisibility: 'hidden' }
  }

  const mergedProps = deepmerge({}, defaultProps, props)

  return (
    <motion.div
      ref={ref}
      className={cn(
        'w-full h-full will-change-contents flex items-center justify-center overflow-hidden',
        className
      )}
      {...mergedProps}
    >
      {children}
    </motion.div>
  )
})

ContentWrapper.displayName = 'ContentWrapper'

export default ContentWrapper
