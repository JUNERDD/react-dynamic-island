export type IslandState =
  | "idle"
  | "ring"
  | "call"
  | "music"
  | "navigation"
  | "payment"
  | "charging"
  | "silent"
  | "morph";

export interface PresetConfig {
  width: number | string;
  height: number | string;
  borderRadius: number;
  opacity?: number;
  scale?: number;
  rotate?: number;
  y?: number;
  boxShadow?: string;
}

export const PRESETS: Record<IslandState, PresetConfig> = {
  idle: {
    width: 120,
    height: 35,
    borderRadius: 20,
    y: 0,
    boxShadow: "none",
  },
  ring: {
    width: 240,
    height: 55,
    borderRadius: 30,
    y: 2,
    boxShadow: "0 0 25px 5px rgba(239, 68, 68, 0.4)",
  },
  call: {
    width: 260,
    height: 50,
    borderRadius: 25,
    y: 0,
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
  music: {
    width: 320,
    height: 160, // Much taller, like a card
    borderRadius: 40,
    y: 0,
    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.5)",
  },
  navigation: {
    width: 360,
    height: 80, // Wide strip instead of tall card
    borderRadius: 40,
    y: 5,
    boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.4)",
  },
  payment: {
    width: 180,
    height: 180, // Perfect square/circle
    borderRadius: 40, // Almost circle
    scale: 1,
    boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.5)",
  },
  charging: {
    width: 200,
    height: 40,
    borderRadius: 20,
    boxShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
  },
  silent: {
    width: 150, // Very small pill
    height: 35,
    borderRadius: 20,
    y: -5,
    boxShadow: "none",
  },
  morph: {
    width: 180,
    height: 180,
    borderRadius: 90, // Circle
    scale: 1,
    opacity: 0.9,
    boxShadow: "0 0 30px 5px rgba(168, 85, 247, 0.5)",
  },
};
