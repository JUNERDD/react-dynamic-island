export const musicViewSource = `import { motion } from 'motion/react'
import { Play, SkipForward, SkipBack } from 'lucide-react'

export default function MusicView() {
  return (
    <div className="flex h-full w-full items-center gap-3 px-4 py-2">
      <motion.div
        layoutId="album-art"
        className="h-12 w-12 rounded-md bg-gradient-to-br from-[#ff0000] to-[#000000] shadow-lg shrink-0 flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,0,0,0.2)_100%)]" />
        <div className="w-4 h-4 rounded-full bg-white/10 blur-sm" />
      </motion.div>
      <div className="flex flex-1 flex-col justify-center overflow-hidden">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold truncate text-foreground">Starboy</span>
          <motion.div className="flex gap-0.5 items-end h-3">
            {[1, 2, 3, 4, 5].map(i => (
              <motion.div
                key={i}
                animate={{ height: [4, 12, 6, 10, 4] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear', delay: i * 0.1 }}
                className="w-1 bg-red-500 rounded-full"
              />
            ))}
          </motion.div>
        </div>
        <span className="text-xs text-muted-foreground/80 truncate">The Weeknd</span>
      </div>
      <div className="flex items-center gap-2 text-foreground">
        <SkipBack
          size={18}
          className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        />
        <Play
          size={20}
          className="fill-current cursor-pointer hover:scale-110 transition-transform text-red-500"
        />
        <SkipForward
          size={18}
          className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  )
}`
