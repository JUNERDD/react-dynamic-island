import { Phone, MicOff, Video } from "lucide-react";
import { motion } from "motion/react";

export default function CallView() {
  return (
    <div className="flex h-full w-full items-center justify-between px-2">
      <div className="flex items-center gap-2 bg-white/10 pr-3 rounded-full p-1">
        <div className="relative">
          <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-sm relative z-10">
            JD
          </div>
          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-indigo-500"
            animate={{ scale: [1, 1.2, 1], opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="flex flex-col justify-center min-w-[40px]">
          <span className="text-sm font-bold leading-none text-background">
            John
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="flex items-end gap-[1px] h-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-[2px] bg-green-400 rounded-full"
                  animate={{ height: ["20%", "100%", "20%"] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            <span className="text-[10px] text-green-400 font-mono leading-none">
              04:20
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-background/80 hover:bg-white/20 cursor-pointer transition-colors"
        >
          <MicOff size={14} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-background/80 hover:bg-white/20 cursor-pointer transition-colors"
        >
          <Video size={14} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 cursor-pointer transition-colors shadow-sm"
        >
          <Phone size={16} className="fill-current rotate-135" />
        </motion.div>
      </div>
    </div>
  );
}
