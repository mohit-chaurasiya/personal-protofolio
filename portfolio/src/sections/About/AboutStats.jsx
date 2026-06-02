import CountUp from "../../components/globalComponent/CountUp";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 100,
    suffix: "+",
    label: "Commits",
  },
  {
    value: 8,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 2026,
    suffix: "",
    label: "Graduate",
  },
];

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4  lg:my-20 my-10">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-3xl
            border
            
            
            
            border-cyan-500/20
            bg-slate-950/40
            backdrop-blur-md
            py-2
            
            text-center
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
          "
        >
          <div className="text-cyan-400 text-xl md:text-2xl font-bold">
            <CountUp from={0} to={stat.value} duration={2} separator="," />
            {stat.suffix}
          </div>
          <p className="  text-slate-500 text-sm md:text-base lg:x-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
