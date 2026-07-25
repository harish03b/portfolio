import { useState } from "react";

import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import type { Project } from "@/components/projects/ProjectCard";

import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/ui/Container";
import { portfolio } from "@/data/portfolio";

import type { ProjectsProps } from "./Projects.types";

const Projects = ({ className }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section
      id="projects"
      className={`py-32 ${className ?? ""}`}
    >
      <Container>
        <SectionHeading
          badge="Portfolio"
          title="Featured Projects"
          description="A selection of AI, Cloud and Full Stack projects demonstrating real-world software engineering and problem solving."
        />

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-2
          "
        >
          {portfolio.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={openProject}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          open={isModalOpen}
          onClose={closeProject}
        />
      </Container>
    </section>
  );
};

export default Projects;