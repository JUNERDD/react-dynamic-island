# React Dynamic Island

A highly customizable and smooth "Dynamic Island" component for React, powered by [Motion](https://motion.dev/). Recreate the fluid morphing animations and interactive states seen in modern UI designs.

## Features

- **Fluid Animations**: Smooth transitions between different states and sizes using Framer Motion.
- **State-Driven**: Easily switch between defined states (e.g., idle, call, music, payment).
- **Fully Customizable**: Define your own states, dimensions, and render components.
- **Headless-ish**: You control the content and styling; the component handles the morphing container.
- **TypeScript Ready**: Built with TypeScript for excellent type safety and developer experience.

## Installation

```bash
npm install ob-react-dynamic-island motion
# or
pnpm add ob-react-dynamic-island motion
# or
yarn add ob-react-dynamic-island motion
```

## Usage

Here is a basic example of how to use `ob-react-dynamic-island`:

```tsx
import { useState } from "react";
import DynamicIsland from "ob-react-dynamic-island";

const App = () => {
  const [state, setState] = useState("idle");

  const components = {
    idle: {
      animatedConfig: { width: 120, height: 35, borderRadius: 20 },
      render: () => (
        <div className="flex items-center justify-center h-full text-xs">
          Idle
        </div>
      ),
    },
    ring: {
      animatedConfig: { width: 220, height: 50, borderRadius: 25 },
      render: () => (
        <div className="flex items-center justify-center h-full">
          Incoming Call...
        </div>
      ),
    },
  };

  return (
    <div className="flex flex-col items-center pt-20 gap-10">
      <DynamicIsland
        value={state}
        components={components}
        className="bg-black text-white shadow-2xl mx-auto"
      />

      <div className="flex gap-4">
        <button onClick={() => setState("idle")}>Idle</button>
        <button onClick={() => setState("ring")}>Ring</button>
      </div>
    </div>
  );
};
```

## API Reference

### Props

`DynamicIsland` extends `MotionProps` (excluding `children`, `layout`, `initial`, `animate`), so it accepts standard Framer Motion props.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `value` | `string` | **Required.** The current active state key. Must match a key in the `components` object. |
| `components` | `Record<string, DynamicIslandComponent>` | **Required.** Configuration object mapping state keys to component definitions. |
| `initialAnimatedConfig` | `AnimatedConfig` | Optional initial animation state. |
| `className` | `string` | CSS class for the main container. |
| `style` | `CSSProperties` | Inline styles for the main container. |
| `contentProps` | `ContentProps` | Props passed to the internal content wrapper (inside `AnimatePresence`). |
| `transition` | `Transition` | Framer Motion transition settings. Defaults to a spring animation. |

### DynamicIslandComponent

The object shape used in the `components` prop values. It extends the container props, allowing you to override them per state.

| Property | Type | Description |
| :--- | :--- | :--- |
| `animatedConfig` | `Target` | **Required.** Framer Motion target object (e.g., width, height). |
| `render` | `(key) => ReactNode` | **Required.** Function returning the content to render. |
| `className` | `string` | Override CSS class for the container in this state. |
| `style` | `CSSProperties` | Override inline styles for the container in this state. |
| `contentProps` | `ContentProps` | Override content wrapper props for this state. |
| `transition` | `Transition` | Override transition for this specific state. |
| `...rest` | `MotionProps` | Any other Framer Motion props to apply to the container in this state. |

### ContentProps

Props for the internal content wrapper. Extends `MotionProps` (excluding `children`, `key`).

| Property | Type | Description |
| :--- | :--- | :--- |
| `className` | `string` | CSS class for the content wrapper. |
| `style` | `CSSProperties` | Inline styles for the content wrapper. |

## Development

This project is organized as a monorepo using [Turborepo](https://turbo.build/repo) and [pnpm](https://pnpm.io/).

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ob-react-dynamic-island.git
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```
   This will start the documentation site (playground) at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
