import SkillsHeader from "./SkillsHeader";
import SkillCategory from "./SkillsCategory";
import { skillCategories } from "./SkillsData";

export default function Skills() {
  console.log(skillCategories);
  return (
    <section id="skills" className="min-h-screen px-6 lg:px-24 py-24">
      <SkillsHeader />

      <div className="grid lg:grid-cols-2 gap-6 mt-16">
        {skillCategories.slice(0, 2).map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {skillCategories.slice(2).map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
