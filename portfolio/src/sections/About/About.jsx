import React from "react";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";
import AboutButtons from "./AboutButton";
import AboutImage from "./AboutImage";
import AboutFeatures from "./AboutFeatures";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="about w-full px-10 lg:px-0"
    >
      <div className="text-center mb-20">
        <p className="text-cyan-400 mb-4">// about.me</p>

        <h2 className="text-5xl md:text-7xl font-bold text-white">
          About <span className="animated-gradient-text">Me</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:px-30 lg:grid-cols-12 gap-16 items-start space-y-6 md:space-y-8"
      >
        <div className="lg:col-span-8">
          <AboutContent />
          <AboutStats />
          <AboutButtons />
        </div>

        <div className="lg:col-span-4 ">
          <AboutImage />
          <AboutFeatures />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
