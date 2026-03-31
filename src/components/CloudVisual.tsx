import { motion } from "motion/react";

const icons = [
  "/aws/ec2.svg",
  "/aws/lambda.svg",
  "/aws/s3.svg",
  "/aws/rds.svg",
  "/aws/dynamodb.svg",
  "/aws/apigateway.svg",
  "/aws/cloudfront.svg",
  "/aws/vpc.svg",
];

export default function CloudVisual() {
  const radius = 140;

  return (
    <div className="relative w-full h-[420px] rounded-xl bg-[#0f172a] border border-white/10 flex items-center justify-center overflow-hidden">

      {/* 🌐 CIRCULAR WEB LINES */}
      <svg className="absolute w-full h-full">
        {icons.map((_, i) => {
          const angle = (i / icons.length) * 2 * Math.PI;

          const x = 50 + (radius * Math.cos(angle)) / 4;
          const y = 50 + (radius * Math.sin(angle)) / 4;

          return (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="rgba(255,255,255,0.08)"
            />
          );
        })}

        {/* circular ring */}
        <circle
          cx="50%"
          cy="50%"
          r="120"
          stroke="rgba(255,255,255,0.05)"
          fill="none"
        />
      </svg>

      {/* 🔥 CENTER AWS */}
      <motion.img
        src="/aws/aws.svg"
        className="absolute w-14"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          filter: "drop-shadow(0 0 10px rgba(255,153,0,0.4))",
        }}
      />

      {/* 🔁 ORBITING ICONS */}
      {icons.map((icon, i) => {
        const delay = i * 0.3;

        return (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "100%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={icon}
                className="w-8 opacity-90 hover:opacity-100 transition"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(255,153,0,0.25))",
                }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* 🌫 SOFT GLOW */}
      <motion.div
        className="absolute w-60 h-60 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,153,0,0.12), transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}
