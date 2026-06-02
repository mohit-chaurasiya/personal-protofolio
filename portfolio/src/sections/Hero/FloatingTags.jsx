import { motion } from "framer-motion";

export default function FloatingTags() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute top-55 left-5  lg:left-20 px-4 py-2 rounded-xl border border-cyan-500/20 bg-slate-900/50 backdrop-blur-md text-cyan-400 opacity-50"
      >
        {"<Developer />"}
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute top-60 right-10 lg:right-24 px-4 py-2 rounded-xl border border-cyan-500/20 bg-slate-900/50 backdrop-blur-md text-pink-400 opacity-50"
      >
        {"code : true"}
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute  left-10 lg:bottom-52 lg:left-32 px-4 py-2 rounded-xl border border-cyan-500/20 bg-slate-900/50 backdrop-blur-md text-orange-400 opacity-50"
      >
        {"npm run build"}
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute bottom-90 right-5 lg:bottom-40 lg:right-32 px-4 py-2 rounded-xl border border-cyan-500/20 bg-slate-900/50 backdrop-blur-md text-cyan-400 opacity-50"
      >
        {"git push origin"}
      </motion.div>
    </>
  );
}
