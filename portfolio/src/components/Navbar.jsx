export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5   md:px-10 flex items-center justify-between bg-slate-950/60 backdrop-blur-md ">
      {/* Logo */}
      <div className="text-white font-bold text-2xl ms-5">
        <img
          src="/logo.png"
          alt="Mohit Chaurasiya Logo"
          className="h-8 w-8 inline-block mr-2"
        />
        Mohit<span className="text-cyan-400">.</span>
      </div>
      {/* Center Navbar */}
      <nav className="hidden lg:flex items-center gap-8 px-8 py-4 rounded-full border border-cyan-500/20 bg-slate-950/60 backdrop-blur-md">
        <a href="#about" className="text-slate-400 hover:text-cyan-500">
          ABOUT
        </a>

        <a href="#skills" className="text-slate-400 hover:text-cyan-500">
          SKILLS
        </a>

        <a href="#projects" className="text-slate-400 hover:text-cyan-500">
          PROJECTS
        </a>

        <a href="#timeline" className="text-slate-400 hover:text-cyan-500">
          TIMELINE
        </a>

        <a href="#contact" className="text-slate-400 hover:text-cyan-500">
          CONTACT
        </a>
      </nav>

      {/* Right Buttons */}
      <div className="hidden lg:flex gap-4">
        <a
          href="https://github.com/mohit-chaurasiya"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-3 pointer-cursor rounded-full border border-cyan-500 text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:-translate-y-1">
            GITHUB
          </button>
        </a>

        <a href="#contact">
          <button className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105">
            HIRE ME
          </button>
        </a>
      </div>
    </header>
  );
}
