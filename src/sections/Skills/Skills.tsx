import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
  viewport,
} from "@/animations";

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
        {/* Section Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeading
            overline="Expertise"
            title="Technical Skills"
            description="Technologies, frameworks and tools I use to build scalable AI-powered and enterprise-grade applications."
          />
        </motion.div>

        {/* Skills Grid */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SkillsGrid />
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;