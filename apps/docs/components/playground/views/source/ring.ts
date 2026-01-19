export const ringViewSource = `import { Phone } from 'lucide-react'

export default function RingView() {
  return (
    <div className="flex h-full w-full items-center justify-between px-3">
      <div className="flex items-center gap-2">
        <div className="bg-red-500/20 text-red-500 p-1 rounded-full">
          <Phone size={14} className="animate-shake" />
        </div>
        <span className="text-xs font-medium text-muted-foreground">Incoming...</span>
      </div>
      <div className="flex gap-2">
        <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center">
          <Phone size={12} className="text-white fill-current" />
        </div>
        <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
          <Phone size={12} className="text-white fill-current" />
        </div>
      </div>
    </div>
  )
}`;
