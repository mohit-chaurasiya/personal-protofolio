import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function FeaturedProject({ project }) {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.01}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
        className="
        overflow-hidden
        rounded-4xl
        border
        border-cyan-500/20
        bg-slate-950/40
        backdrop-blur-xl
        "
      >
        {/* Image Placeholder */}

        <div
          className="
          h-[320px]
          relative
          border-b
          border-cyan-500/10
          "
        >
          <div
            className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-linear-to-br
            from-slate-900
            via-slate-950
            to-black
            overflow-hidden
            "
          >
            <div className="text-center overflow-hidden ">
              <div className="text-6xl overflow-hidden font-bold text-white">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full overflow-hidden hover:scale-105 transition-transform duration-500 "
                  />
                ) : (
                  <div className="text-slate-400">Image not available</div>
                )}
              </div>

              <p className="text-cyan-400 mt-4">Project Screenshot</p>
            </div>
          </div>

          {/* Live Badge */}

          <div
            className="
  absolute
  top-5
  left-5
  px-4
  py-2
  rounded-full
  bg-black/60
  backdrop-blur-md
  border
  border-white/10
  "
          >
            <span className="text-yellow-400">●</span> Deployment Pending
          </div>
        </div>

        {/* Content */}

        <div className="p-8">
          <h3
            className="
            text-3xl
            font-bold
            text-white
            "
          >
            {project.title}
          </h3>

          <p
            className="
            text-cyan-400
            mt-2
            "
          >
            {project.subtitle}
          </p>

          <p
            className="
            text-slate-400
            mt-6
            leading-relaxed
            "
          >
            {project.description}
          </p>

          {/* Tech Stack */}

          <div
            className="
          gap-3
          mt-5
          flex"
          >
            {project.tech.map((item) => (
              <span
                key={item}
                className="
px-4
py-2
rounded-full
border
border-cyan-500/20
text-cyan-400
text-sm
transition-all
duration-200
hover:border-cyan-400
hover:bg-cyan-500/10
hover:scale-105
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div
            className="
  flex
  gap-4
  mt-8
  "
          >
            <a
              href={project.github}
              target="_blank"
              className="
    px-6
    py-3
    rounded-full
    border
    border-cyan-500/30
    text-white
    hover:bg-cyan-500/10
    transition-all
    "
            >
              Source Code
            </a>

            <button
              className="
    px-6
    py-3
    rounded-full
    bg-slate-800
    text-slate-300
    cursor-default
    "
            >
              Deployment Pending
            </button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}
