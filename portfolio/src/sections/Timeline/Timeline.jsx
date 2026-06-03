import TimelineHeader from "./TimelineHeader";
import TimelineCard from "./TimelineCard";
import { timelineData } from "./timelineData";
import { motion } from "framer-motion";
import Particles from "../../components/globalComponent/Particles";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="
      relative
      px-4
      md:px-10
      lg:px-20
      py-28
      overflow-hidden
      "
    >
      <Particles />

      <div
        className="
      absolute
      left-1/2
      top-0
      -translate-x-1/2
      w-[500px]
      h-full
      bg-cyan-500/10
      blur-[180px]
      pointer-events-none
    "
      />
      <TimelineHeader />

      <div className="relative">
        {/* Center Line */}

        <motion.div
          initial={{
            height: 0,
          }}
          whileInView={{
            height: "100%",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="
  hidden md:block
  absolute
  left-1/2
  top-0
  -translate-x-1/2
  w-0.5
  bg-linear-to-b
  from-cyan-400
  via-purple-500
  to-orange-400
  "
        />

        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <div key={item.year} className="relative">
              {/* Dot */}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px #22d3ee",
                    "0 0 40px #22d3ee",
                    "0 0 10px #22d3ee",
                  ],
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
  hidden md:block
  absolute
  left-1/2
  top-12
  -translate-x-1/2
  h-5
  w-5
  rounded-full
  bg-cyan-400
  "
              />

              <div
                className={`
  hidden md:block
  absolute
  top-12
  h-0.5
  bg-cyan-400/50

  ${index % 2 === 0 ? "right-1/2 w-24" : "left-1/2 w-24"}
  `}
              />

              <TimelineCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
