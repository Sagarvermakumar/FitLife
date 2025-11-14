"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-transparent overflow-hidden">
      <div className="relative h-full w-full">

        {/* BLUE BLOB */}
        <motion.div
          className="absolute top-[15%] left-[5%] h-[150px] w-[150px] rounded-full  bg-purple-900/70 blur-[50px]"
          animate={{ x: [0, 10, -10, 0], y: [0, -15, 20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

      

        {/* PURPLE BLOB */}
        <motion.div
          className="absolute bottom-[5%] right-[5%] h-[120px] w-[120px] rounded-full bg-purple-900/80 blur-[50px]"
          animate={{ x: [0, 20, -20, 0], y: [0, -30, 30, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* DARK OVERLAY WITHOUT HIDING BLOB COLORS */}
        <div className="absolute inset-0 h-full w-full bg-black/30 backdrop-blur-xl" />
      </div>
    </div>
  );
}
