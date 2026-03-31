import { motion } from "motion/react";

const icons = [
  "/aws/ec2.svg",
  "/aws/lambda.svg",
  "/aws/s3.svg",
  "/aws/rds.svg",
  "/aws/dynamodb.svg",
  "/aws/apigateway.svg",
  "/aws/cloudfront.svg",
];

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[420px] rounded-xl bg-[#0b0f14] border border-white/10 overflow-hidden">

      {/* 🌫 BACKGROUND GRADIENT GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-[#FF9900]/10 blur-[120px] rounded-full top-1/3 left-1/4" />
        <div className="absolute w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full bottom-1/3 right-1/4" />
      </div>

      {/* 🌌 FLOATING PARTICLES */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * 400,
            y: Math.random() * 400,
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* ☁️ CENTER CLOUD */}
      <motion.img
        src="/aws/aws.svg"
        className="absolute w-16 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          filter: "drop-shadow(0 0 20px rgba(255,153,0,0.4))",
        }}
      />

      {/* 🔁 FLOATING AWS SERVICES */}
      {icons.map((icon, i) => (
        <motion.img
          key={i}
          src={icon}
          className="absolute w-8 opacity-90"
          initial={{
            x: `${20 + Math.random() * 60}%`,
            y: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            x: [
              `${20 + Math.random() * 60}%`,
              `${20 + Math.random() * 60}%`,
            ],
            y: [
              `${20 + Math.random() * 60}%`,
              `${20 + Math.random() * 60}%`,
            ],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "drop-shadow(0 0 10px rgba(255,153,0,0.25))",
          }}
        />
      ))}

      {/* ⚡ LIGHT FLOW LINES */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent"
          style={{
            top: `${20 + i * 10}%`,
            left: "-20%",
            width: "140%",
          }}
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
