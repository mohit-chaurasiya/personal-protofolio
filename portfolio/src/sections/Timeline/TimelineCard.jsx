import { motion } from "framer-motion";

export default function TimelineCard({ item, index }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className={`
        relative
        w-full
        md:w-[42%]
        xl:w-[40%]
        ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
      `}
    >
      <div className="group relative">
        {/* Top Right Glow */}
        <div
          className="
          absolute
          -top-20
          -right-20
          w-40
          h-40
          rounded-full
          bg-cyan-500/20
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
          "
        />

        {/* Bottom Left Glow */}
        <div
          className="
          absolute
          -bottom-20
          -left-20
          w-40
          h-40
          rounded-full
          bg-purple-500/20
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
          "
        />

        {/* Border Glow */}
        <div
          className="
          absolute
          -inset-[1px]
          rounded-[32px]
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-r
          from-cyan-500/30
          via-blue-500/20
          to-purple-500/30
          blur-md
          "
        />

        <div
          className="
          relative
          rounded-[32px]
          border
          border-cyan-500/20
          bg-gradient-to-br
          from-slate-950/90
          via-slate-950/80
          to-slate-900/90
          backdrop-blur-xl
          p-8
          transition-all
          duration-500
          group-hover:border-cyan-400/50
          group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
          "
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{item.icon}</span>

            <span className="text-cyan-400 font-bold">{item.year}</span>

            <motion.span
              whileHover={{
                scale: 1.08,
              }}
              className="
              px-3
              py-1
              rounded-full
              bg-cyan-500/10
              text-cyan-400
              text-sm
              "
            >
              {item.badge}
            </motion.span>
          </div>

          <h3
            className="
            text-3xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
            "
          >
            {item.title}
          </h3>

          <p className="text-slate-400 mt-1">{item.company}</p>

          <p className="text-slate-400 mt-6 leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {item.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{
                  scale: 1.08,
                }}
                className="
                px-3
                py-1
                rounded-full
                bg-slate-800
                text-slate-300
                text-sm
                transition-all
                duration-300
                hover:bg-cyan-500/20
                hover:text-cyan-300
                "
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
