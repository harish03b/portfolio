import SkillsGrid from "@/components/skills/SkillsGrid";

import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/ui/Container";

import type { SkillsProps } from "./Skills.types";

const Skills = ({
  className,
}: SkillsProps) => {
  return (
    <section
      id="skills"
      className={`py-28 ${className ?? ""}`}
    >
      <Container>
        <SectionHeading
          badge="Expertise"
          title="Technical Skills"
          description="Technologies, frameworks and tools I use to build scalable AI-powered and enterprise-grade applications."
        />

        <SkillsGrid />
      </Container>
    </section>
  );
};

export default Skills;