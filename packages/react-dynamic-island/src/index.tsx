import { deepmerge } from 'deepmerge-ts'

import ContentWrapper from './_components/ContentWrapper'

import type { DynamicIslandProps } from './_types'
import type { Transition } from 'motion'
import React from 'react'
import { cn } from './lib/utils'
import { LayoutGroup, motion, AnimatePresence } from 'motion/react'

const defaultTransition: Transition = {
  type: 'spring',
  damping: 25,
  stiffness: 282
}

function DynamicIsland<K extends string>({
  components,
  value,
  initialAnimatedConfig,
  className,
  contentProps,
  transition = defaultTransition,
  ...rest
}: DynamicIslandProps<K>) {
  const {
    animatedConfig,
    render,
    contentProps: compContentProps,
    className: compClassName,
    transition: compTransition,
    ...compRest
  } = components[value]

  // 顶层 props < component props
  const merged = {
    rest: deepmerge({}, rest, compRest),
    transition: deepmerge({}, transition, compTransition) as Transition,
    contentProps: deepmerge({}, contentProps, compContentProps)
  }

  return (
    <LayoutGroup>
      <motion.div
        layout
        initial={initialAnimatedConfig || false}
        animate={animatedConfig}
        transition={merged.transition}
        className={cn('relative overflow-hidden', className, compClassName)}
        {...merged.rest}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <ContentWrapper key={value} {...merged.contentProps}>
            {render(value)}
          </ContentWrapper>
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  )
}

export default DynamicIsland
