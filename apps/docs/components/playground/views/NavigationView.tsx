import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function NavigationView() {
  return (
    <div className="flex h-full w-full items-center px-6 gap-6">
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-1">
          <motion.div
            animate={{
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          >
            <ArrowUpRight size={26} className="text-background" />
          </motion.div>
          <span className="text-xl font-bold text-background leading-none">
            200m
          </span>
        </div>
        <span className="text-sm font-medium text-background/60 truncate">
          Turn right onto Market St
        </span>
      </div>

      <div className="h-full py-4 flex items-center">
        <div className="w-0.5 h-full bg-background/20 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-green-500 rounded-full"
            animate={{ height: ["0%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      <div className="flex flex-col items-end justify-center min-w-[60px]">
        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-bold text-green-500">12</span>
          <span className="text-xs font-medium text-green-500">min</span>
        </div>
        <div className="flex items-center gap-0.5 text-xs text-background/40">
          <span>10</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            :
          </motion.span>
          <span>42</span>
          <span className="ml-0.5">AM</span>
        </div>
      </div>
    </div>
  );
}
