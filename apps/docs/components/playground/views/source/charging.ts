export const chargingViewSource = `import { motion } from 'motion/react'
import { Zap } from 'lucide-react'

export default function ChargingView() {
  return (
    <div className="flex h-full w-full items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center">
            {/* 核心闪电 */}
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                filter: ["drop-shadow(0 0 0px rgba(34,197,94,0))", "drop-shadow(0 0 8px rgba(34,197,94,0.6))", "drop-shadow(0 0 0px rgba(34,197,94,0))"] 
              }}
              transition={{
                scale: { type: "spring", stiffness: 300, damping: 15 },
                rotate: { type: "spring", stiffness: 300, damping: 15 },
                filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-green-500 z-10 relative"
            >
              <Zap size={18} className="fill-current" />
            </motion.div>
            
            {/* 能量波纹 */}
            <motion.div 
               className="absolute inset-0 text-green-500"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ 
                 opacity: [0, 0.5, 0], 
                 scale: [1, 1.8, 2],
               }}
               transition={{ 
                 duration: 1.5, 
                 repeat: Infinity, 
                 ease: "easeOut",
                 delay: 0.5 
               }}
            >
               <Zap size={18} className="fill-current" />
            </motion.div>
        </div>

        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm font-medium text-green-500"
        >
          Charging
        </motion.span>
      </div>

      <div className="flex items-center gap-2.5">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-bold font-mono text-white"
        >
          75%
        </motion.span>
        {/* Custom Battery Icon */}
        <div className="relative">
          <div className="h-3.5 w-7 rounded-[3px] border border-white/30 p-[1.5px] relative">
            <motion.div 
              className="h-full rounded-[1px] bg-green-500"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
            />
          </div>
          {/* Battery Positive Terminal */}
          <div className="absolute -right-[2px] top-1/2 h-1.5 w-[2px] -translate-y-1/2 rounded-r-[1px] bg-white/30" />
        </div>
      </div>
    </div>
  )
}`;
