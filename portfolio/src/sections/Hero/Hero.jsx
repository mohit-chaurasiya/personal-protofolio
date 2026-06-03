import React from "react";
import TypewriterText from "./TypewriterText";
import HeroStats from "./HeroStats";
import FloatingTags from "./FloatingTags";
import ScrollIndicator from "./ScrollIndicator";

function Hero() {
  return (
    <section className="relative flex flex-col px-2 items-center justify-center min-h-screen text-center gap-6">
      <FloatingTags />
      <div className="text-cyan-400 bg-cyan-200/2 mt-8 md:mt-20 py-2 px-4 md:px-5 text-sm md:text-base rounded-full border border-cyan-500">
        ⭐ Available for opportunities
      </div>

      <p className="text-cyan-400 ">// Hello, World!</p>

      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white">
        I'm <span className="animated-gradient-text">Mohit</span>
      </h1>

      <TypewriterText />

      <p className="text-slate-400 text-sm sm:text-base md:text-lg px-6 max-w-3xl">
        Building performant, scalable web applications with modern technologies.{" "}
        <br />
        Turning complex problems into elegant digital experiences.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
        <a href="#projects" className="w-full sm:w-auto">
          <button className="px-8 sm:w-auto py-3 rounded-full bg-cyan-400 text-black font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105">
            VIEW PROJECTS
          </button>
        </a>
        <a href="#contact" className="w-full sm:w-auto">
          <button className="px-8 py-3 sm:w-auto rounded-full border border-cyan-500 text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:-translate-y-1">
            GET IN TOUCHES
          </button>
        </a>
      </div>

      <HeroStats />

      <ScrollIndicator />
    </section>
  );
}

export default Hero;
