import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <img
              src="/logo.png"
              alt="logo"
              className="w-14 h-14 object-contain transition duration-500 hover:scale-110 hover:rotate-6"
            />

            <div>
              <h2 className="text-3xl font-bold text-white">
                Mohit<span className="text-cyan-400">.</span>
              </h2>

              <p className="text-slate-400 text-sm">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 text-slate-400"
          >
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#journey"
              className="hover:text-cyan-400 transition duration-300"
            >
              Journey
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/mohit-chaurasiya"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-cyan-500/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              {/* <Github size={18} /> */}
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/mohit-chaurasiya-dev/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-cyan-500/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              {/* <Linkedin size={18} /> */}
              <FaLinkedin size={18} />
            </a>

            <a
              href="mailto:mohit.chaurasiya0857@gmail.com?subject=Portfolio Contact&body=Hi Mohit, I want to connect with you.mohit.chaurasiya0857@gmail.com"
              mark="email"
              className="w-11 h-11 rounded-full bg-white/5 border border-cyan-500/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Mohit. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            Designed & Built with
            <Heart size={16} className="text-red-500 fill-red-500" />
            using React
          </div>
        </div>
      </div>
    </footer>
  );
}
