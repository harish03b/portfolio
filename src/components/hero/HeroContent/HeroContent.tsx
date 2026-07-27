import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  fadeUp,
  viewport,
} from "@/animations";

import Button from "@/components/ui/Button";

import { portfolio } from "@/data/portfolio";

const HeroContent = () => {
    const [currentTitle, setCurrentTitle] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTitle((previous) =>
      previous ===
      portfolio.hero.rotatingTitles.length - 1
        ? 0
        : previous + 1,
    );
  }, 2500);

  return () => clearInterval(interval);
}, []);
  return (
    <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={viewport}
>
      {/* Badge */}

      <span
        className="
          inline-flex
          rounded-full
          border
          border-primary/20
          bg-primary/10
          px-5
          py-2.5
          text-sm
          font-semibold
          text-primary
        "
      >
        👋 {portfolio.hero.badge}
      </span>

      {/* Heading */}

      <h1
        className="
         mt-10
text-5xl
font-black
leading-none
tracking-tight
lg:text-[5.3rem]
        "
      >
        {portfolio.profile.fullName}
      </h1>

      {/* Rotating Title */}

      <div
        className="
          mt-8
          h-14
          overflow-hidden
        "
      >
        <h2
          className="
            text-3xl
            font-bold
            text-primary
            lg:text-[2.7rem]
          "
        >
         <span
  key={currentTitle}
  className="
    inline-block
    animate-fade-in
  "
>
  {portfolio.hero.rotatingTitles[currentTitle]}
</span>
        </h2>
      </div>

      {/* Description */}

      <p
        className="
          mt-10
          max-w-2xl
          text-xl
leading-9
          text-foreground-muted
        "
      >
        {portfolio.hero.subHeading}
      </p>
            {/* CTA Buttons */}

      <div
        className="
          mt-12
          flex
          flex-wrap
          gap-5
        "
      >
        <Button
          size="lg"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          🚀 Explore Projects
        </Button>

        <a
          href={portfolio.profile.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="lg"
          >
            Download Resume
          </Button>
        </a>
      </div>

      {/* Social Links */}

      <div
        className="
          mt-12
          flex
          flex-wrap
          items-center
          gap-8
        "
      >
        <a
          href={portfolio.social.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm
            font-medium
            text-foreground-muted
            transition-colors
            hover:text-primary
          "
        >
          GitHub
        </a>

        <a
          href={portfolio.social.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm
            font-medium
            text-foreground-muted
            transition-colors
            hover:text-primary
          "
        >
          LinkedIn
        </a>

        <a
          href={portfolio.social.email.url}
          className="
            text-sm
            font-medium
            text-foreground-muted
            transition-colors
            hover:text-primary
          "
        >
          Email
        </a>
      </div>
          </motion.div>
  );
};

export default HeroContent;