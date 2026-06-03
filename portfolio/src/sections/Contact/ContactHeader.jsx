export default function ContactHeader() {
  return (
    <div className="text-center">
      <p className="text-cyan-400 mb-4">// say.hello</p>

      <h2 className="text-5xl md:text-7xl font-bold text-white">
        Get In <span className="animated-gradient-text">Touch</span>
      </h2>

      <p className="max-w-3xl mx-auto text-slate-400 text-lg mt-8">
        Looking for an intern, collaborator, or passionate developer? I'm
        currently building full-stack projects with React and Django and
        actively seeking internship opportunities to grow as a software
        developer.
      </p>

      <div className="mt-8">
        <span
          className="
          px-4 py-2
          rounded-full
          bg-cyan-500/10
          text-cyan-400
          "
        >
          Available for Internships • 2026 Diploma Holder
        </span>
      </div>
    </div>
  );
}
