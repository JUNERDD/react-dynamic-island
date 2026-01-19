export const callViewSource = `import { Phone } from 'lucide-react'

export default function CallView() {
  return (
    <div className="flex h-full w-full items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
          JD
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium leading-none">John Doe</span>
          <span className="text-xs text-green-500 mt-1">04:20</span>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="h-10 w-10 rounded-full bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center cursor-pointer transition-colors">
          <Phone size={18} className="text-red-500" />
        </div>
      </div>
    </div>
  )
}`
