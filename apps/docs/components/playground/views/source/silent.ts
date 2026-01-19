export const silentViewSource = `import { motion } from 'motion/react'
import { Bell } from 'lucide-react'

export default function SilentView() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2 text-red-500">
      <motion.div
        initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
        animate={{ rotate: [0, -25, 25, -15, 15, 0], scale: 1, opacity: 1 }}
        transition={{ 
          rotate: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 }
        }}
      >
        <Bell size={16} className="fill-current shrink-0" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-xs font-semibold whitespace-nowrap"
      >
        Silent On
      </motion.span>
    </div>
  )
}`;
