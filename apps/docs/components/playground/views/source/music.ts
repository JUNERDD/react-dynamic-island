export const musicViewSource = `import { motion } from 'motion/react'
import { Play, SkipForward, SkipBack } from 'lucide-react'

export default function MusicView() {
  return (
    <div className="flex flex-col h-full w-full justify-between p-6">
      <div className="flex gap-4">
        <motion.div
          layoutId="album-art"
          className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#ff0000] to-[#000000] shadow-lg shrink-0 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,0,0,0.2)_100%)]" />
          <div className="w-8 h-8 rounded-full bg-white/10 blur-sm" />
        </motion.div>
        
        <div className="flex flex-col justify-center gap-0.5 min-w-0">
          <span className="text-base font-bold truncate text-background leading-tight">Starboy</span>
          <span className="text-xs text-background/60 truncate font-medium">The Weeknd</span>
          <div className="flex gap-1 items-end h-3 mt-1">
            {[1, 2, 3, 4, 5, 6, 7].map(i => (
              <motion.div
                key={i}
                animate={{ height: [4, 12, 6, 10, 4] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: 'linear', delay: i * 0.05 }}
                className="w-1.5 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-2 px-2">
        <span className="text-xs font-mono text-background/40">1:20</span>
        <div className="flex items-center gap-6 text-background">
          <SkipBack size={24} className="cursor-pointer opacity-70 hover:opacity-100" />
          <Play size={32} className="fill-current cursor-pointer hover:scale-110 transition-transform" />
          <SkipForward size={24} className="cursor-pointer opacity-70 hover:opacity-100" />
        </div>
        <span className="text-xs font-mono text-background/40">3:50</span>
      </div>
    </div>
  )
}`;
