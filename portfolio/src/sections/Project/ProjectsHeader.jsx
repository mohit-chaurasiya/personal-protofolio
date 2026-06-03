export default function ProjectsHeader() {
  return (
    <div className="flex items-center justify-between mb-12">
      <div>
        <p className="text-cyan-400 mb-4">// my.work</p>

        <h2 className="text-5xl md:text-7xl font-bold text-white">
          Featured <span className="animated-gradient-text">Projects</span>
        </h2>
      </div>

      <a
        href="https://github.com/mohit-chaurasiya?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="
  hidden md:flex
  items-center
  gap-2
  px-8
  py-4
  rounded-full
  border
  border-cyan-500/30
  text-cyan-400
  hover:bg-cyan-500/10
  hover:border-cyan-400/50
  transition-all
  duration-300
  "
      >
        ALL PROJECTS →
      </a>
    </div>
  );
}
