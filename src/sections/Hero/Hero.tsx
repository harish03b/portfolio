import HeroContent from "@/components/hero/HeroContent";
import ProfileCard from "@/components/hero/ProfileCard";
import TechStack from "@/components/hero/TechStack";

import Container from "@/components/ui/Container";

import type { HeroProps } from "./Hero.types";

const Hero = ({ className }: HeroProps) => {
  return (
    <section
      id="home"
      className={`relative overflow-hidden py-24 lg:py-32 ${
        className ?? ""
      }`}
    >
     <Container>
  <div
    className="
      grid
      items-start
      gap-16
      lg:grid-cols-[1.2fr_0.8fr]
    "
  >
    {/* Left Column */}

    <div className="flex flex-col">
      <HeroContent />

      <div className="mt-16">
        <h3
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
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
      </div>
    </div>

    {/* Right Column */}

    <ProfileCard />
  </div>
</Container>
    </section>
  );
};

export default Hero;