import { Download, ArrowRight } from "lucide-react";

export default function AboutButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      {/* Primary Button */}
      <button
        className="
        px-8 py-4
        rounded-full
        bg-cyan-400
        text-black
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
        "
      >
        <span className="flex items-center gap-2">
          WORK TOGETHER
          <ArrowRight size={18} />
        </span>
      </button>

      {/* Secondary Button */}
      <button
        className="
        px-8 py-4
        rounded-full
        border
        border-cyan-500/30
        bg-slate-950/40
        backdrop-blur-md
        text-cyan-400
        font-semibold
        transition-all
        duration-300
        hover:bg-cyan-500/10
        hover:border-cyan-400
        hover:-translate-y-1
        "
      >
        <span className="flex items-center gap-2">
          <Download size={18} />
          DOWNLOAD CV
        </span>
      </button>
    </div>
  );
}
