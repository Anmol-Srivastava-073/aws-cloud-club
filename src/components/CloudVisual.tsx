import { motion } from "motion/react";
import { useState } from "react";

const nodes = [
  { id: 1, x: 0, y: 0, label: "AWS" },

  { id: 2, x: -90, y: -60, label: "EC2" },
  { id: 3, x: 90, y: -60, label: "S3" },
  { id: 4, x: -90, y: 60, label: "Lambda" },
  { id: 5, x: 90, y: 60, label: "RDS" },

  { id: 6, x: 0, y: -100, label: "API" },
  { id: 7, x: 0, y: 100, label: "CloudFront" },

  { id: 8, x: -140, y: 0, label: "IAM" },
  { id: 9, x: 140, y: 0, label: "VPC" },
];

export default function CloudVisual() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full h-[320px] flex items-center justify-center rounded-md border border-white/10 bg-[#161b22] overflow-hidden">

      {/* CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full">

        {/* Center connections */}
        {nodes.slice(1).map((node) => (
          <line
            key={node.id}
            x1="50%"
            y1="50%"
            x2={`${50 + node.x / 4}%`}
            y2={`${50 + node.y / 4}%`}
            stroke="rgba(255,153,0,0.15)"
            strokeWidth="1"
          />
        ))}

        {/* Extra mesh connections (denser web) */}
        {nodes.slice(1).map((a, i) =>
          nodes.slice(i + 2).map((b) => (
            <line
              key={`${a.id}-${b.id}`}
              x1={`${50 + a.x / 4}%`}
              y1={`${50 + a.y / 4}%`}
              x2={`${50 + b.x / 4}%`}
              y2={`${50 + b.y / 4}%`}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.5"
            />
          ))
        )}

      </svg>

      {/* NODES */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          onMouseEnter={() => setHovered(node.id)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            y: [node.y, node.y + 4, node.y],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute flex flex-col items-center"
          style={{
            transform: `translate(${node.x}px, ${node.y}px)`,
          }}
        >
          {/* NODE */}
          <div
            className={`rounded-full transition-all duration-300 ${
              i === 0
                ? "w-4 h-4 bg-[#FF9900] shadow-[0_0_12px_rgba(255,153,0,0.6)]"
                : "w-2 h-2 bg-white/70 hover:bg-[#FF9900]"
            }`}
          />

          {/* LABEL (on hover) */}
          {hovered === node.id && (
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: -8 }}
              className="text-[10px] text-gray-300 mt-1"
            >
              {node.label}
            </motion.span>
          )}
        </motion.div>
      ))}

      {/* CENTER PULSE */}
      <motion.div
        className="absolute w-24 h-24 border border-[#FF9900]/10 rounded-full"
        animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

    </div>
  );
}
