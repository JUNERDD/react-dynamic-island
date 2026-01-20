"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Phone,
  CreditCard,
  MapPin,
  Music,
  BatteryCharging,
  Bell,
  Sparkles,
  Percent,
} from "lucide-react";
import type { IslandState, PresetConfig } from "./types";

interface ControlPanelProps {
  activeState: IslandState;
  setActiveState: (state: IslandState) => void;
  config: PresetConfig;
  updateConfig: (key: keyof PresetConfig, value: number | string) => void;
}

const formatDimension = (value: number | string) => {
  if (typeof value === "string") return value;
  return `${Math.round(value)}px`;
};

export default function ControlPanel({
  activeState,
  setActiveState,
  config,
  updateConfig,
}: ControlPanelProps) {
  const widthValue = typeof config.width === "number" ? config.width : 0;
  const heightValue = typeof config.height === "number" ? config.height : 0;

  return (
    <div className="w-full md:w-96 bg-card border-l border-border p-6 flex flex-col gap-8 h-auto overflow-y-auto shadow-xl z-20">
      <div>
        <h2 className="text-xl font-bold mb-1">Scenarios</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Select a preset state to preview.
        </p>

        <div className="grid grid-cols-2 gap-2">
          {(Object.keys(PRESETS) as IslandState[]).map((state) => (
            <button
              key={state}
              onClick={() => setActiveState(state)}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all border",
                activeState === state
                  ? "bg-primary text-primary-foreground border-primary shadow-md ring-1 ring-primary/20"
                  : "bg-muted/50 hover:bg-muted border-transparent hover:border-border text-foreground",
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
            <p className="text-xs text-muted-foreground">
              Tweak the current state
            </p>
          </div>
          <div className="text-xs font-mono bg-muted px-2 py-1 rounded">
            {formatDimension(config.width)} x {formatDimension(config.height)}
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Width</label>
              <span className="text-muted-foreground">
                {formatDimension(config.width)}
              </span>
            </div>
            {typeof config.width === "number" ? (
              <input
                type="range"
                min="50"
                max="500"
                value={widthValue}
                onChange={(e) => updateConfig("width", Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            ) : (
              <div className="h-2 bg-muted/50 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                Fixed at {config.width}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Height</label>
              <span className="text-muted-foreground">
                {formatDimension(config.height)}
              </span>
            </div>
            {typeof config.height === "number" ? (
              <input
                type="range"
                min="30"
                max="400"
                value={heightValue}
                onChange={(e) => updateConfig("height", Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            ) : (
              <div className="h-2 bg-muted/50 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                Fixed at {config.height}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Border Radius</label>
              <span className="text-muted-foreground">
                {Math.round(config.borderRadius)}px
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={config.borderRadius}
              onChange={(e) =>
                updateConfig("borderRadius", Number(e.target.value))
              }
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold">Transform</h3>
            <p className="text-xs text-muted-foreground">
              Opacity, Scale & Rotate
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Opacity</label>
              <span className="text-muted-foreground">
                {config.opacity?.toFixed(2) ?? "1.00"}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={config.opacity ?? 1}
              onChange={(e) => updateConfig("opacity", Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Scale</label>
              <span className="text-muted-foreground">
                {config.scale?.toFixed(2) ?? "1.00"}
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.05"
              value={config.scale ?? 1}
              onChange={(e) => updateConfig("scale", Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Rotate</label>
              <span className="text-muted-foreground">
                {config.rotate ?? 0}°
              </span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              value={config.rotate ?? 0}
              onChange={(e) => updateConfig("rotate", Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Y Position</label>
              <span className="text-muted-foreground">{config.y ?? 0}px</span>
            </div>
            <input
              type="range"
              min="-100"
              max="100"
              value={config.y ?? 0}
              onChange={(e) => updateConfig("y", Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold">Shadow</h3>
            <p className="text-xs text-muted-foreground">Box shadow effect</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <label>Box Shadow</label>
              <span className="text-muted-foreground text-[10px] truncate max-w-[120px]">
                {config.boxShadow ?? "none"}
              </span>
            </div>
            <input
              type="text"
              value={config.boxShadow ?? ""}
              onChange={(e) => updateConfig("boxShadow", e.target.value)}
              placeholder="e.g., 0 5px 15px rgba(0,0,0,0.2)"
              className="w-full px-3 py-2 text-xs bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { PRESETS } from "./types";

function getIconForState(state: IslandState) {
  switch (state) {
    case "idle":
      return (
        <div className="w-4 h-4 rounded-full border-2 border-current opacity-50" />
      );
    case "ring":
      return <Phone size={14} />;
    case "call":
      return <Phone size={14} className="fill-current" />;
    case "music":
      return <Music size={14} />;
    case "navigation":
      return <MapPin size={14} />;
    case "payment":
      return <CreditCard size={14} />;
    case "charging":
      return <BatteryCharging size={14} />;
    case "silent":
      return <Bell size={14} />;
    case "morph":
      return <Sparkles size={14} />;
    case "percentage":
      return <Percent size={14} />;
  }
}
