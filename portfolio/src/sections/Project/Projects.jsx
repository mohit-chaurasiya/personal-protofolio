import ProjectsHeader from "./ProjectsHeader";
import FeaturedProject from "./FeaturedProject";
import { featuredProject, projects } from "./ProjectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
      px-4
      md:px-10
      lg:px-20
      py-24
      "
    >
      <ProjectsHeader />

      <FeaturedProject project={featuredProject} />
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
