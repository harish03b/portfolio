import HeroContent from "@/components/hero/HeroContent";
import ProfileCard from "@/components/hero/ProfileCard";
import TechStack from "@/components/hero/TechStack";

import Container from "@/components/ui/Container";

import type { HeroProps } from "./Hero.types";

import { motion } from "framer-motion";

import {
  fadeUp,
  slideLeft,
  staggerContainer,
} from "@/animations";

const Hero = ({ className }: HeroProps) => {
  return (
    <section
      id="home"
      className={`relative overflow-hidden py-24 lg:py-32 ${
        className ?? ""
      }`}
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="
            grid
            items-start
            gap-20
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          {/* Left Column */}

          <motion.div
            variants={fadeUp}
            className="flex flex-col"
          >
            <HeroContent />

            <motion.div
              variants={fadeUp}
              className="mt-20"
            >
              <h3
                className="
                  text-base
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-primary
                "
              >
                Core Technologies
              </h3>

              <p
                className="
                  mt-3
                  mb-8
                  max-w-xl
                  text-foreground-muted
                "
              >
                Technologies I use to build scalable AI,
                cloud and enterprise applications.
              </p>

              <TechStack />
            </motion.div>
          </motion.div>

          {/* Right Column */}

          <motion.div variants={slideLeft}>
            <ProfileCard />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;