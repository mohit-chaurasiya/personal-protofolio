import { motion } from "framer-motion";

export default function Particles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, index) => {
        const colors = ["#22d3ee", "#a855f7", "#fb923c"];

        const color = colors[index % colors.length];

        return (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: color,
              boxShadow: `0 0 12px ${color}`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
