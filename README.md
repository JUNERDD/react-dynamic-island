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
npm install react-dynamic-island motion
# or
pnpm add react-dynamic-island motion
# or
yarn add react-dynamic-island motion
```

## Usage

Here is a basic example of how to use `react-dynamic-island`:

```tsx
import { useState } from 'react'
import DynamicIsland from 'react-dynamic-island'

const App = () => {
  const [state, setState] = useState('idle')

  const components = {
    idle: {
      animatedConfig: { width: 120, height: 35, borderRadius: 20 },
      render: () => <div className="flex items-center justify-center h-full text-xs">Idle</div>
    },
    ring: {
      animatedConfig: { width: 220, height: 50, borderRadius: 25 },
      render: () => <div className="flex items-center justify-center h-full">Incoming Call...</div>
    }
  }

  return (
    <div className="flex flex-col items-center pt-20 gap-10">
      <DynamicIsland
        value={state}
        components={components}
        className="bg-black text-white shadow-2xl mx-auto"
      />

      <div className="flex gap-4">
        <button onClick={() => setState('idle')}>Idle</button>
        <button onClick={() => setState('ring')}>Ring</button>
      </div>
    </div>
  )
}
```

## API

### `<DynamicIsland />`

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | The current active state key (e.g., `'idle'`, `'call'`). |
| `components` | `object` | A configuration object defining the behavior and appearance for each state. |
| `className` | `string` | Optional CSS classes for the island container. |

### Component Configuration Object

The `components` prop expects an object where keys correspond to state names, and values are objects with:

- `animatedConfig`: Object defining the physical dimensions for the state.
  - `width`: `number` (pixels)
  - `height`: `number` (pixels)
  - `borderRadius`: `number` (pixels)
- `render`: `() => ReactNode` - Function returning the content to display for this state.

## Development

This project is organized as a monorepo using [Turborepo](https://turbo.build/repo) and [pnpm](https://pnpm.io/).

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/react-dynamic-island.git
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
