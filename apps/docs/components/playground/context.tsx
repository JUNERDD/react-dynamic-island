import { createContext, useContext } from "react";
import { IslandState, PresetConfig } from "./types";

export type UpdatePresetFn = (
  state: IslandState,
  config: Partial<PresetConfig>,
) => void;

interface PlaygroundContextType {
  updatePreset: UpdatePresetFn;
}

export const PlaygroundContext = createContext<PlaygroundContextType | null>(
  null,
);

export const usePlayground = () => {
  const context = useContext(PlaygroundContext);
  if (!context) {
    throw new Error("usePlayground must be used within a PlaygroundProvider");
  }
  return context;
};
