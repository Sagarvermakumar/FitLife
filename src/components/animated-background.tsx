"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-transparent">
      <div className="relative h-full w-full">
        <motion.div
          className="absolute top-[18%] left-[2%] h-[150px] w-[150px] rounded-full bg-blue-700/60"
          style={{ filter: "blur(70px)" }}
          animate={{ x: [0, 10, -10, 0], y: [0, -15, 20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[10%] right-[5%] h-[150px] w-[150px] rounded-full bg-pink-700/55"
          style={{ filter: "blur(70px)" }}
          animate={{ x: [0, -40, 40, 0], y: [0, 40, -20, 0] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      
        <motion.div
          className="absolute bottom-[40%] left-[40%] h-[150px] w-[150px] rounded-full bg-purple-500/30"
          style={{ filter: "blur(60px)" }}
          animate={{ x: [0, 20, -20, 0], y: [0, -30, 30, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 h-full w-full bg-black/20 backdrop-blur-lg" />
      </div>
    </div>
  );
}
