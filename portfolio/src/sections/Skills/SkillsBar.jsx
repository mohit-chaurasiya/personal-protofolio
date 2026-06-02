import { motion } from "framer-motion";

export default function SkillsBar({ name, level, gradient }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white">{name}</span>

        <span className="text-slate-400">{level}%</span>
      </div>

      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${level}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className={`h-full rounded-full `}
          style={{
            background: gradient,
            boxShadow: "0 0 12px rgba(255,255,255,0.15)",
          }}
        />
      </div>
    </div>
  );
}
