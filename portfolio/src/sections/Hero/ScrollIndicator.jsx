import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      onClick={scrollToAbout}
      className=" flex flex-col items-center cursor-pointer select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <span className="text-slate-500 text-sm uppercase tracking-[0.35em]">
        Scroll
      </span>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-slate-500 text-3xl"
      >
        ↓
      </motion.div>
    </motion.div>
  );
}
