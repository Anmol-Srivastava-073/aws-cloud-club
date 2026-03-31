import { motion } from "motion/react";

const layers = [
  {
    radius: 90,
    speed: 20,
    icons: [
      "/aws/ec2.svg",
      "/aws/s3.svg",
      "/aws/lambda.svg",
      "/aws/rds.svg",
    ],
  },
  {
    radius: 140,
    speed: 28,
    icons: [
      "/aws/dynamodb.svg",
      "/aws/apigateway.svg",
      "/aws/cloudfront.svg",
      "/aws/vpc.svg",
      "/aws/sqs.svg",
      "/aws/sns.svg",
    ],
  },
];

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[420px] rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center overflow-hidden">

      {/* 🔥 RADIAL GRID */}
      <svg className="absolute w-full h-full opacity-30">
        {/* circles */}
        <circle cx="50%" cy="50%" r="80" stroke="rgba(255,255,255,0.05)" fill="none" />
        <circle cx="50%" cy="50%" r="130" stroke="rgba(255,255,255,0.04)" fill="none" />

        {/* radial lines */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * 2 * Math.PI;
          const x = 50 + 50 * Math.cos(angle);
          const y = 50 + 50 * Math.sin(angle);

          return (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="rgba(255,255,255,0.03)"
            />
          );
        })}
      </svg>

      {/* 🌐 CENTER */}
      <motion.img
        src="/aws/aws.svg"
        className="absolute w-14 z-10"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          filter: "drop-shadow(0 0 12px rgba(255,153,0,0.4))",
        }}
      />

      {/* 🔁 ORBIT LAYERS */}
      {layers.map((layer, layerIndex) => (
        <motion.div
          key={layerIndex}
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            duration: layer.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: layer.radius * 2,
            height: layer.radius * 2,
          }}
        >
          {layer.icons.map((icon, i) => {
            const angle = (i / layer.icons.length) * 2 * Math.PI;

            const x = layer.radius + layer.radius * Math.cos(angle);
            const y = layer.radius + layer.radius * Math.sin(angle);

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  y: [0, -4, 0],
                  opacity: [0.85, 1, 0.85],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                }}
              >
                <img
                  src={icon}
                  className="w-7"
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(255,153,0,0.2))",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      ))}

      {/* 🌫 SOFT CENTER GLOW */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,153,0,0.08), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
}
