import { motion } from "framer-motion";

export default function TimelineHeader() {
  return (
    <div className="text-center mb-24">
      <p className="text-cyan-400 mb-4">// my.journey</p>

      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        className="text-4xl md:text-7xl font-bold text-white"
      >
        Developer <span className="animated-gradient-text">Journey</span>
      </motion.h2>

      <p className="max-w-3xl mx-auto text-slate-400 text-lg mt-8">
        From learning my first programming concepts to building full-stack
        applications and real-world projects.
      </p>
      <div className="max-w-4xl mx-auto mt-12">
        <div className="flex justify-between text-sm text-slate-500 mb-3">
          <span>2022</span>
          <span>2026</span>
        </div>

        <div className="h-[3px] bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="
      h-full
      rounded-full
      bg-gradient-to-r
      from-cyan-400
      via-purple-500
      to-orange-400
      "
          />
        </div>
      </div>
    </div>
  );
}
