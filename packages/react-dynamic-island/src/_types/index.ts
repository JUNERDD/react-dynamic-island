import type { MotionProps, Target } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'

export type AnimatedConfig = Target

export interface DynamicIslandProps<K extends string = string>
  extends Omit<MotionProps, 'children' | 'layout' | 'initial' | 'animate'> {
  components: Record<K, DynamicIslandComponent<K>>
  value: K
  initialAnimatedConfig?: AnimatedConfig
  className?: string
  style?: CSSProperties
  contentProps?: ContentProps
}

export interface DynamicIslandComponent<K extends string = string>
  extends Omit<
    DynamicIslandProps,
    'components' | 'value' | 'initialAnimatedConfig' | 'motionConfig'
  > {
  /** 容器动画配置 */
  animatedConfig: AnimatedConfig
  /** 内容渲染函数 */
  render: (key: K) => ReactNode
}

export interface ContentProps extends Omit<MotionProps, 'children' | 'key'> {
  className?: string
  style?: CSSProperties
}
