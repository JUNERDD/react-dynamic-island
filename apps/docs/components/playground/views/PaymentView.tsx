import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function PaymentView() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center relative">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15 }}
        className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center mb-3 relative z-10"
      >
        <Check size={28} className="text-white stroke-[3]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center z-10"
      >
        <div className="text-lg font-bold text-background">Payment</div>
        <div className="text-sm font-medium text-background/60 mt-1">
          Confirmed
        </div>
      </motion.div>

      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 bg-blue-500/10 rounded-[40px]"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
