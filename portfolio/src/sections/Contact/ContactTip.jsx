export default function ContactTip() {
  return (
    <div
      className="
      mt-6
      relative
      overflow-hidden

      rounded-[32px]
      border
      border-cyan-500/20

      bg-slate-950/60
      backdrop-blur-xl

      p-8

      hover:border-cyan-400/40
      hover:-translate-y-1

      transition-all
      duration-500
      "
    >
      {/* Glow Effect */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-r
        from-cyan-500/5
        via-transparent
        to-purple-500/5

        opacity-0
        hover:opacity-100

        transition-all
        duration-500
        "
      />

      <div className="relative z-10">
        <p className="text-lg leading-relaxed">
          <span className="font-bold text-cyan-400">Pro tip:</span>

          <span className="text-slate-300 text-sm ">
            {" "}
            Looking for internship opportunities, freelance projects, or
            developer collaborations. Feel free to share your ideas and let's
            build something amazing together.
          </span>

          <span className="ml-2 text-xl">🚀</span>
        </p>
      </div>
    </div>
  );
}
