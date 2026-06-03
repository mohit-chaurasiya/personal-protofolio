import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Code2 } from "lucide-react";
export default function ContactSocials() {
  return (
    <div
      className="
      mt-6
      rounded-[32px]
      border border-cyan-500/20
      bg-slate-950/60
      backdrop-blur-xl
      p-8

      hover:border-cyan-400/40
      hover:bg-cyan-500/5

      transition-all duration-500
      "
    >
      <h3 className="text-2xl font-bold text-white mb-8">Find Me Online</h3>

      <div className="grid grid-cols-2 gap-6">
        <a
          href="https://github.com/mohit-chaurasiya"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-all duration-300"
        >
          <FaGithub className="text-cyan-400 text-xl" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/mohit-chaurasiya-dev/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-all duration-300"
        >
          <FaLinkedin className="text-sky-400 text-xl" />
          <span>LinkedIn</span>
        </a>

        <a
          href="#projects"
          className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-all duration-300"
        >
          <Code2 className="h-5 w-5" />
          <span>Projects</span>
        </a>
      </div>
    </div>
  );
}
