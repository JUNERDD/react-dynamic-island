export const silentViewSource = `import { Bell } from 'lucide-react'

export default function SilentView() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2 text-red-500">
      <Bell size={16} className="fill-current" />
      <span className="text-sm font-semibold">Silent Mode On</span>
    </div>
  )
}`
