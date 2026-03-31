import { motion } from "motion/react";
import { useEffect, useState } from "react";

const awsIcons = [
  { name: "EC2", file: "ec2" },
  { name: "Lambda", file: "lambda" },
  { name: "S3", file: "s3" },
  { name: "RDS", file: "rds" },
  { name: "DynamoDB", file: "dynamodb" },
  { name: "API Gateway", file: "apigateway" },
  { name: "CloudFront", file: "cloudfront" },
  { name: "VPC", file: "vpc" },
  { name: "SQS", file: "sqs" },
  { name: "SNS", file: "sns" },
  { name: "CloudWatch", file: "cloudwatch" },
  { name: "IAM", file: "iam" },
  { name: "Route 53", file: "route53" },
];

export default function CloudVisual() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  // 🔥 CLEAN GRID (NO OVERLAP)
  useEffect(() => {
    const cols = 4;

    const generated = awsIcons.map((icon, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      return {
        id: i,
        icon: `/aws/${icon.file}.svg`,
        name: icon.name,
        baseX: 15 + col * 22,
        baseY: 18 + row * 20,
        offsetX: Math.random() * 8 - 4,
        offsetY: Math.random() * 8 - 4,
      };
    });

    setNodes(generated);
  }, []);

  return (
    <div className="relative w-full h-[420px] rounded-xl bg-[#0b0f14] border border-white/10 overflow-hidden">

      {/* 🌫 subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-[#FF9900]/10 blur-[120px] rounded-full top-1/3 left-1/4" />
        <div className="absolute w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full bottom-1/3 right-1/4" />
      </div>

      {/* 🔗 CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const dist = Math.hypot(a.baseX - b.baseX, a.baseY - b.baseY);

            if (dist < 30) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${a.baseX}%`}
                  y1={`${a.baseY}%`}
                  x2={`${b.baseX}%`}
                  y2={`${b.baseY}%`}
                  stroke="rgba(255,153,0,0.08)"
                  strokeWidth="1"
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* 🔥 ICON NODES */}
      {nodes.map(node => (
        <motion.div
          key={node.id}
          className="absolute group cursor-pointer"
          style={{
            left: `${node.baseX}%`,
            top: `${node.baseY}%`,
            transform: "translate(-50%, -50%)",
          }}
          onHoverStart={() => setHovered(node.id)}
          onHoverEnd={() => setHovered(null)}
          animate={{
            x: [0, node.offsetX, 0],
            y: [0, node.offsetY, 0],
          }}
          transition={{
            duration: 4 + node.id * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* ICON */}
          <img
            src={node.icon}
            onError={(e: any) => (e.currentTarget.style.display = "none")} // 🔥 removes broken icons
            className="w-7 opacity-90 group-hover:opacity-100 transition"
            style={{
              filter: "drop-shadow(0 0 6px rgba(255,153,0,0.25))",
            }}
          />

          {/* 🔥 TOOLTIP */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs rounded bg-[#161b22] border border-white/10 text-gray-300 whitespace-nowrap
            transition-all duration-200
            ${hovered === node.id ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0 pointer-events-none"}
            `}
          >
            {node.name}
          </div>
        </motion.div>
      ))}

      {/* ✨ subtle sweep */}
      <motion.div
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/30 to-transparent w-[140%]"
        style={{ top: "50%", left: "-20%" }}
        animate={{ x: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
