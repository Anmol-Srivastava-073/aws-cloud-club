import { motion } from "motion/react";

const nodes = [
  { id: 1, x: 0, y: 0 },     // center
  { id: 2, x: -70, y: -50 },
  { id: 3, x: 70, y: -50 },
  { id: 4, x: -70, y: 50 },
  { id: 5, x: 70, y: 50 },
];

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[280px] flex items-center justify-center rounded-md border border-white/10 bg-[#161b22]">

      {/* CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.slice(1).map((node) => (
          <line
            key={node.id}
            x1="50%"
            y1="50%"
            x2={`${50 + node.x / 3}%`}
            y2={`${50 + node.y / 3}%`}
            stroke="rgba(255,153,0,0.15)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* NODES */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          animate={{
            y: [node.y, node.y + 4, node.y],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            transform: `translate(${node.x}px, ${node.y}px)`,
          }}
        >
          <div
            className={`rounded-full ${
              i === 0
                ? "w-3.5 h-3.5 bg-[#FF9900] shadow-[0_0_10px_rgba(255,153,0,0.6)]"
                : "w-2 h-2 bg-white/70"
            }`}
          />
        </motion.div>
      ))}

      {/* SUBTLE PULSE FROM CENTER */}
      <motion.div
        className="absolute w-20 h-20 border border-[#FF9900]/10 rounded-full"
        animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

    </div>
  );
}
