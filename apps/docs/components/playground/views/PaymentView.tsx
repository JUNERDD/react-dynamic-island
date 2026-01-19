import { motion } from 'motion/react'
import { Fingerprint } from 'lucide-react'

export default function PaymentView() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="h-16 w-16 rounded-full bg-blue-500 text-white flex items-center justify-center relative"
      >
        <Fingerprint size={32} />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 border-4 border-white/30 border-t-white rounded-full"
        />
      </motion.div>
      <div className="text-center">
        <div className="font-semibold text-lg">Apple Pay</div>
        <div className="text-xs text-muted-foreground">Double click to confirm</div>
      </div>
    </div>
  )
}
