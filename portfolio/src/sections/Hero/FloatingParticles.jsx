import { motion } from "framer-motion";

export default function FloatingParticle() {
  return (
    <>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400 overflow-hidden"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -100],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
}
