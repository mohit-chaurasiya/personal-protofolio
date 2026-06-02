import { motion } from "framer-motion";
import SkillBar from "./SkillsBar";

export default function SkillsCategory({ title, icon, skills }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="
      rounded-3xl
      border
      border-cyan-500/20
      bg-slate-950/40
      backdrop-blur-xl
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-cyan-400/40
      hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">{icon}</span>

        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>

      <div className="space-y-6">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            gradient={skill.gradient}
          />
        ))}
      </div>
    </motion.div>
  );
}
