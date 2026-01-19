'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Phone, CreditCard, MapPin, Music, BatteryCharging, Bell } from 'lucide-react'
import type { IslandState, PresetConfig } from './types'

interface ControlPanelProps {
  activeState: IslandState
  setActiveState: (state: IslandState) => void
  config: PresetConfig
  updateConfig: (key: keyof PresetConfig, value: number) => void
}

export default function ControlPanel({
  activeState,
  setActiveState,
  config,
  updateConfig
}: ControlPanelProps) {
  // We need to import PRESETS here or pass it down.
  // Since types are shared, let's assume PRESETS is available or pass it as prop.
  // But to avoid circular deps or prop drilling, let's just import PRESETS directly here.
  // Wait, importing from types.ts? No, types.ts shouldn't export data usually.
  // Let's modify types.ts to export PRESETS or import it here.
  // I'll assume I can import PRESETS from './types' or I should have moved it.
  // In the previous step I wrote types.ts with PRESETS. So I can import it.

  // However, I need to make sure I actually exported it in the file I wrote.
  // Yes, `export const PRESETS` is in types.ts.

  return (
    <div className="w-full md:w-96 bg-card border-l border-border p-6 flex flex-col gap-8 h-auto  overflow-y-auto shadow-xl z-20">
      <div>
        <h2 className="text-xl font-bold mb-1">Scenarios</h2>
        <p className="text-sm text-muted-foreground mb-4">Select a preset state to preview.</p>

        <div className="grid grid-cols-2 gap-2">
          {(Object.keys(PRESETS) as IslandState[]).map((state) => (
            <button
              key={state}
              onClick={() => setActiveState(state)}
              className={cn(
                'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all border',
                activeState === state
                  ? 'bg-primary text-primary-foreground border-primary shadow-md ring-1 ring-primary/20'
                  : 'bg-muted/50 hover:bg-muted border-transparent hover:border-border text-foreground'
              )}
            >
              {getIconForState(state)}
              <span className="capitalize">{state}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold">Dimensions</h3>
            <p className="text-xs text-muted-foreground">Tweak the current state</p>
          </div>
          <div className="text-xs font-mono bg-muted px-2 py-1 rounded">
            {Math.round(config.width)} x {Math.round(config.height)}
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Width</label>
              <span className="text-muted-foreground">{config.width}px</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              value={config.width}
              onChange={(e) => updateConfig('width', Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Height</label>
              <span className="text-muted-foreground">{config.height}px</span>
            </div>
            <input
              type="range"
              min="30"
              max="400"
              value={config.height}
              onChange={(e) => updateConfig('height', Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Border Radius</label>
              <span className="text-muted-foreground">{config.borderRadius}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={config.borderRadius}
              onChange={(e) => updateConfig('borderRadius', Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper imports to avoid issues if PRESETS is not exported from types correctly (it is, but good practice to keep this file clean)
// Actually I need to import PRESETS from './types' and getIconForState definition here.

import { PRESETS } from './types'

function getIconForState(state: IslandState) {
  switch (state) {
    case 'idle':
      return <div className="w-4 h-4 rounded-full border-2 border-current opacity-50" />
    case 'ring':
      return <Phone size={14} />
    case 'call':
      return <Phone size={14} className="fill-current" />
    case 'music':
      return <Music size={14} />
    case 'navigation':
      return <MapPin size={14} />
    case 'payment':
      return <CreditCard size={14} />
    case 'charging':
      return <BatteryCharging size={14} />
    case 'silent':
      return <Bell size={14} />
  }
}
