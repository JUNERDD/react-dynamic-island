export type IslandState =
  | 'idle'
  | 'ring'
  | 'call'
  | 'music'
  | 'navigation'
  | 'payment'
  | 'charging'
  | 'silent'

export interface PresetConfig {
  width: number
  height: number
  borderRadius: number
}

export const PRESETS: Record<IslandState, PresetConfig> = {
  idle: { width: 120, height: 35, borderRadius: 20 },
  ring: { width: 220, height: 50, borderRadius: 25 },
  call: { width: 280, height: 60, borderRadius: 30 },
  music: { width: 340, height: 70, borderRadius: 35 },
  navigation: { width: 300, height: 160, borderRadius: 40 },
  payment: { width: 200, height: 200, borderRadius: 45 },
  charging: { width: 250, height: 50, borderRadius: 25 },
  silent: { width: 200, height: 45, borderRadius: 25 }
}
