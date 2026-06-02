import { motion } from "framer-motion";

const stats = [
  {
    value: "5+",
    label: "Projects",
  },
  {
    value: "100+",
    label: "Commits",
  },
  {
    value: "8+",
    label: "Technologies",
  },
  {
    value: "2026",
    label: "Diploma Completion Year",
  },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-24 lg:mt-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
          }}
          className="text-center"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
            {stat.value}
          </p>

          <p className="mt-1 text-gray-400 uppercase tracking-wider text-xs sm:text-sm">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
