import {
  Calendar,
  ExternalLink,
  Github,
  X,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import Button from "@/components/ui/Button";

import type { ProjectModalProps } from "./ProjectModal.types";

const ProjectModal = ({
  project,
  open,
  onClose,
}: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/70
            p-6
            backdrop-blur-md
          "
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              max-h-[92vh]
              w-full
              max-w-6xl
              overflow-y-auto
              rounded-3xl
              border
              border-border
              bg-background
              shadow-2xl
            "
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="
                absolute
                right-6
                top-6
                z-20
                rounded-full
                border
                border-border
                bg-card
                p-2
                transition-all
                hover:bg-background-secondary
              "
            >
              <X className="h-5 w-5" />
            </button>

            {/* Hero Image */}

            <div
              className="
                aspect-[16/7]
                overflow-hidden
                bg-background-secondary
              "
            >
              {project.images.length > 0 ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              ) : (
                <div
                  className="
                    flex
                    h-full
                    items-center
                    justify-center
                    text-foreground-muted
                  "
                >
                  Project Preview
                </div>
              )}
            </div>

            {/* Header */}

            <div className="p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="
                    rounded-full
                    bg-primary/10
                    px-4
                    py-1
                    text-sm
                    font-semibold
                    text-primary
                  "
                >
                  {project.category}
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-border
                    px-4
                    py-1
                    text-sm
                  "
                >
                  {project.status}
                </span>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-foreground-muted
                  "
                >
                  <Calendar className="h-4 w-4" />

                  {project.duration}
                </span>
              </div>

              <h2
                className="
                  mt-6
                  text-5xl
                  font-bold
                  tracking-tight
                "
              >
                {project.title}
              </h2>

              <p
                className="
                  mt-6
                  max-w-4xl
                  text-lg
                  leading-8
                  text-foreground-muted
                "
              >
                {project.description}
              </p>               {/* Overview */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Project Overview
                </h3>

                <p className="mt-5 leading-8 text-foreground-muted">
                  {project.description}
                </p>
              </section>

              {/* Problem Statement */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Problem Statement
                </h3>

                <p className="mt-5 leading-8 text-foreground-muted">
                  {project.problemStatement}
                </p>
              </section>

              {/* Business Impact */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Business Impact
                </h3>

                <p className="mt-5 leading-8 text-foreground-muted">
                  {project.businessImpact}
                </p>
              </section>

              {/* Architecture */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Architecture
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {project.architecture.map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-xl
                        border
                        border-border
                        bg-card
                        px-5
                        py-4
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Features */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Key Features
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border
                        border-border
                        bg-card
                        p-4
                      "
                    >
                      <div
                        className="
                          mt-2
                          h-2
                          w-2
                          rounded-full
                          bg-primary
                        "
                      />

                      <span className="leading-7 text-foreground-muted">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technologies */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Technologies
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-border
                        bg-background-secondary
                        px-4
                        py-2
                        text-sm
                        font-medium
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>
                           {/* My Role */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  My Role & Contributions
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {project.myRole.map((role) => (
                    <div
                      key={role}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border
                        border-border
                        bg-card
                        p-4
                      "
                    >
                      <div
                        className="
                          mt-2
                          h-2
                          w-2
                          rounded-full
                          bg-primary
                        "
                      />

                      <span className="leading-7 text-foreground-muted">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenges */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Key Challenges
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {project.keyChallenges.map((challenge) => (
                    <div
                      key={challenge}
                      className="
                        rounded-xl
                        border
                        border-border
                        bg-card
                        p-4
                      "
                    >
                      <p className="leading-7 text-foreground-muted">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Future Enhancements */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Future Enhancements
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.futureEnhancements.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-primary/30
                        bg-primary/10
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-primary
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              {/* Learning Outcomes */}

              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Learning Outcomes
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.learningOutcomes.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-border
                        bg-background-secondary
                        px-4
                        py-2
                        text-sm
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              {/* Footer Buttons */}

              <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      <Github className="h-4 w-4" />
                      GitHub Repository
                    </Button>
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                )}

                <Button
                  variant="ghost"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 