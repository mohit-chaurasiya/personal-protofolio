import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <div className="flex flex-col items-center">
      {/* Image Container */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: true }}
        className="relative flex items-center justify-center"
      >
        {/* Glow */}
        <div
          className="
          absolute
          -inset-10
          rounded-full
          bg-cyan-500/20
          blur-3xl
          "
        />

        {/* Rotating Ring */}
        <div
          className="
  absolute
  w-[200px]
  h-[200px]
  rounded-full
  slow-spin
  "
          style={{
            border: "2px solid rgba(34,211,238,0.15)",
            borderTop: "2px solid #22d3ee",
          }}
        />

        {/* Second Ring */}
        <div
          className="
          absolute
          w-[160px]
          h-[160px]
          md:w-[250px]
          md:h-[250px]
          rounded-full
          border
          border-cyan-500/10
          slow-spin-reverse
          "
        />

        {/* Profile Image */}
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
          relative
          w-32
          h-32
          md:w-50
          md:h-50
          rounded-full
          overflow-hidden
          border-4
          border-cyan-500/20
          shadow-[0_0_40px_rgba(34,211,238,0.25)]
          "
        >
          <img
            src="/Mohit.jpg"
            alt="Mohit"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Floating Badge */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        -mt-6
        flex
        items-center
        gap-2
        px-5
        py-2
        rounded-full
        border
        border-cyan-500/20
        bg-slate-950/50
        backdrop-blur-xl
        text-cyan-400
        "
      >
        <Briefcase size={16} />
        <span>OPEN TO WORK</span>
      </motion.div>

      {/* Bottom Card */}
    </div>
  );
}
