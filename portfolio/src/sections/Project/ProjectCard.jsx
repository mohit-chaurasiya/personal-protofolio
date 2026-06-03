import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.12}
      scale={1.02}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
group
h-full
rounded-[28px]
overflow-hidden
border
border-cyan-500/20
bg-slate-950/40
backdrop-blur-xl
"
      >
        {/* IMAGE */}
        <div className="h-52 relative overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="
      h-full
      w-full
      object-cover
      transition-all
      duration-700
      group-hover:scale-110
      "
            />
          ) : (
            <div
              className="
      h-full
      flex
      items-center
      justify-center
      bg-slate-900
      text-slate-400
      "
            >
              Image not available
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>

          <p className="text-cyan-400 mt-2">{project.subtitle}</p>

          <p className="text-slate-400 mt-4">{project.description}</p>

          {/* TECH */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
px-4
py-2
rounded-full
border
border-cyan-500/20
text-cyan-400
text-sm
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:scale-105
"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* LINKS */}
          <div className="flex justify-between items-center mt-6">
            <a
              target="_blank"
              href={project.github}
              className="
    text-slate-400
    hover:text-white
    transition-colors
    "
            >
              Source
            </a>

            {project.status === "live" ? (
              <a href={project.live} target="_blank" className="text-cyan-400">
                Live Demo ↗
              </a>
            ) : project.status === "development" ? (
              <span className="text-yellow-400">In Development</span>
            ) : project.status === "backend" ? (
              <span className="text-purple-400">Backend Only</span>
            ) : (
              <span className="text-orange-400">Deployment Pending</span>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}
