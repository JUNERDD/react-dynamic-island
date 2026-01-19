import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScanFace, Check } from "lucide-react";
import { usePlayground } from "../context";

export default function MorphView() {
  const [state, setState] = useState<"scanning" | "success">("scanning");
  const { updatePreset } = usePlayground();

  useEffect(() => {
    let mounted = true;
    const cycle = async () => {
      while (mounted) {
        // Scanning State
        setState("scanning");
        updatePreset("morph", { width: 120, height: 120, borderRadius: 60 });

        await new Promise((r) => setTimeout(r, 2000));
        if (!mounted) break;

        // Success State
        setState("success");
        updatePreset("morph", { width: 200, height: 160, borderRadius: 40 });

        await new Promise((r) => setTimeout(r, 1500));
      }
    };
    cycle();
    return () => {
      mounted = false;
    };
  }, [updatePreset]);

  return (
    <div className="flex h-full w-full items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        {state === "scanning" ? (
          <motion.div
            key="scanning"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, filter: "blur(8px)" }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="relative">
              <ScanFace size={60} className="text-blue-500" strokeWidth={1.5} />
              <motion.div
                className="absolute left-0 right-0 h-1 bg-blue-400/80 shadow-[0_0_15px_2px_rgba(96,165,250,0.8)] rounded-full blur-[1px]"
                animate={{ top: ["10%", "90%", "10%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.1,
            }}
          >
            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              <Check size={20} className="text-white stroke-[4]" />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-green-500"
            >
              Success
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
