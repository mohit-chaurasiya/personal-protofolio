import { motion } from "framer-motion";
import { Zap, Brain, Code2, Rocket } from "lucide-react";
import Tilt from "react-parallax-tilt";

const features = [
  {
    icon: Zap,
    title: "Performance First",
    desc: "Focused on building fast and optimized applications.",
  },
  {
    icon: Brain,
    title: "Fast Learner",
    desc: "Quickly adapt to new technologies and frameworks.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Readable, maintainable and scalable code practices.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    desc: "Enjoy turning complex ideas into simple solutions.",
  },
];

export default function AboutFeatures() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-2 mt-8 ">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <Tilt
            key={feature.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={true}
            glareMaxOpacity={0.15}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
             w-full
              group
              rounded-3xl
              border
              border-cyan-500/20
              bg-slate-950/40
              backdrop-blur-xl
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400
              hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
            "
            >
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                w-12
                h-12
                rounded-2xl
                flex
                items-center
                justify-center
                bg-cyan-500/10
                text-cyan-400
                mb-4
              "
              >
                <Icon size={22} />
              </motion.div>

              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          </Tilt>
        );
      })}
    </div>
  );
}
