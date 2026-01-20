"use client";

import * as React from "react";
import DynamicIsland, { DynamicIslandProps } from "react-dynamic-island";
import {
  IdleView,
  RingView,
  CallView,
  MusicView,
  NavigationView,
  PaymentView,
  ChargingView,
  SilentView,
  MorphView,
  PercentageView,
  ControlPanel,
  type IslandState,
  type PresetConfig,
  PRESETS,
} from "@/components/playground";
import {
  PlaygroundContext,
  type UpdatePresetFn,
} from "@/components/playground/context";
import DebugPanel from "@/components/playground/DebugPanel";

type State = {
  activeState: IslandState;
  presets: Record<IslandState, PresetConfig>;
};

type Action =
  | { type: "SET_ACTIVE_STATE"; payload: IslandState }
  | {
      type: "UPDATE_CONFIG";
      payload: { key: keyof PresetConfig; value: number | string };
    }
  | {
      type: "UPDATE_PRESET";
      payload: { state: IslandState; config: Partial<PresetConfig> };
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ACTIVE_STATE":
      return { ...state, activeState: action.payload };
    case "UPDATE_CONFIG":
      return {
        ...state,
        presets: {
          ...state.presets,
          [state.activeState]: {
            ...state.presets[state.activeState],
            [action.payload.key]: action.payload.value,
          },
        },
      };
    case "UPDATE_PRESET":
      return {
        ...state,
        presets: {
          ...state.presets,
          [action.payload.state]: {
            ...state.presets[action.payload.state],
            ...action.payload.config,
          },
        },
      };
    default:
      return state;
  }
};

export default function PlaygroundPage() {
  const [state, dispatch] = React.useReducer(reducer, {
    activeState: "idle",
    presets: PRESETS,
  });

  const updateConfig = (key: keyof PresetConfig, value: number | string) => {
    dispatch({ type: "UPDATE_CONFIG", payload: { key, value } });
  };

  const updatePreset: UpdatePresetFn = React.useCallback(
    (islandState, config) => {
      dispatch({
        type: "UPDATE_PRESET",
        payload: { state: islandState, config },
      });
    },
    [],
  );

  const setActiveState = (newState: IslandState) => {
    dispatch({ type: "SET_ACTIVE_STATE", payload: newState });
  };

  // Bind each component to its specific persistent preset
  const components = {
    idle: {
      animatedConfig: state.presets.idle,
      render: () => <IdleView />,
    },
    ring: {
      animatedConfig: state.presets.ring,
      render: () => <RingView />,
    },
    call: {
      animatedConfig: state.presets.call,
      render: () => <CallView />,
    },
    music: {
      animatedConfig: state.presets.music,
      render: () => <MusicView />,
    },
    navigation: {
      animatedConfig: state.presets.navigation,
      render: () => <NavigationView />,
    },
    payment: {
      animatedConfig: state.presets.payment,
      render: () => <PaymentView />,
    },
    charging: {
      animatedConfig: state.presets.charging,
      render: () => <ChargingView />,
    },
    silent: {
      animatedConfig: state.presets.silent,
      render: () => <SilentView />,
    },
    morph: {
      animatedConfig: state.presets.morph,
      render: () => <MorphView />,
    },
    percentage: {
      animatedConfig: state.presets.percentage,
      render: () => <PercentageView />,
    },
  } satisfies DynamicIslandProps<IslandState>["components"];

  return (
    <PlaygroundContext.Provider value={{ updatePreset }}>
      <div className="bg-background text-foreground flex flex-col md:flex-row overflow-hidden font-sans x:max-w-(--nextra-content-width) mx-auto w-full flex-1">
        {/* Left: Playground Area */}
        <div className="flex-1 relative flex flex-col items-center justify-start pt-32 bg-dot-pattern">
          <DebugPanel
            activeState={state.activeState}
            animatedConfig={state.presets[state.activeState]}
          />
          {/* Dynamic Island Container */}
          <div className="relative z-10 w-full flex-1">
            <DynamicIsland
              value={state.activeState}
              components={components}
              className="bg-foreground text-background shadow-2xl mx-auto"
            />
          </div>
        </div>

        {/* Right: Control Panel */}
        <ControlPanel
          activeState={state.activeState}
          setActiveState={setActiveState}
          config={state.presets[state.activeState]}
          updateConfig={updateConfig}
        />
      </div>
    </PlaygroundContext.Provider>
  );
}
