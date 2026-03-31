import { motion } from "motion/react";

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[280px] flex items-center justify-center rounded-md border border-white/10 bg-[#161b22] overflow-hidden">

      {/* CENTER CORE */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-4 h-4 bg-[#FF9900] rounded-full z-10 shadow-[0_0_12px_rgba(255,153,0,0.6)]"
      />

      {/* ORBIT NODES */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-full h-full"
        >
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/70 rounded-full" />
        </motion.div>
      ))}

      {/* RING */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.circle
          cx="50%"
          cy="50%"
          r="70"
          stroke="rgba(255,153,0,0.15)"
          strokeWidth="1"
          fill="none"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      {/* FLOATING PARTICLES */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
          }}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            top: `${20 + i * 12}%`,
            left: `${15 + i * 15}%`,
          }}
        />
      ))}

    </div>
  );
}
