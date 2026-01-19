import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function RingView() {
  return (
    <div className="flex h-full w-full items-center justify-between px-3">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="bg-red-500 text-white p-2 rounded-full relative z-10">
            <Phone size={16} className="fill-current animate-shake" />
          </div>
          <motion.div
            className="absolute inset-0 bg-red-500 rounded-full -z-0"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-background/60 uppercase tracking-wide">
            Mobile
          </span>
          <span className="text-sm font-bold text-background">Mom</span>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="h-9 w-9 rounded-full bg-red-500 flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform">
          <Phone size={16} className="text-white fill-current rotate-135" />
        </div>
        <div className="h-9 w-9 rounded-full bg-green-500 flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform">
          <Phone size={16} className="text-white fill-current" />
        </div>
      </div>
    </div>
  );
}
