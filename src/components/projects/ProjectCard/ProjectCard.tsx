import {
  ArrowUpRight,
  Github,
} from "lucide-react";

import Button from "@/components/ui/Button";

import type {
  ProjectCardProps,
} from "./ProjectCard.types";

const ProjectCard = ({
  project,
  onViewDetails,
}: ProjectCardProps) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary
        hover:shadow-xl
      "
    >
      {/* Project Image */}

      <div
        className="
          relative
          aspect-video
          overflow-hidden
          bg-background-secondary
        "
      >
        {project.images.length > 0 ? (
          <img
            src={project.images[0]}
            alt={project.title}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
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

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
          "
        />

        {/* Category */}

        <div className="absolute left-5 top-5">
          <span
            className="
              rounded-full
              bg-primary
              px-3
              py-1
              text-xs
              font-semibold
              text-primary-foreground
            "
          >
            {project.category}
          </span>
        </div>

        {/* Status */}

        <div className="absolute right-5 top-5">
          <span
            className="
              rounded-full
              bg-card/90
              px-3
              py-1
              text-xs
              font-medium
              backdrop-blur-md
            "
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content */}

      <div className="p-7">
        <h3
          className="
            text-2xl
            font-bold
            leading-tight
            text-foreground
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-4
            line-clamp-3
            leading-7
            text-foreground-muted
          "
        >
          {project.description}
        </p>

        {/* Technologies */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >
          {project.technologies
            .slice(0, 6)
            .map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-border
                  bg-background
                  px-3
                  py-1
                  text-xs
                  font-medium
                "
              >
                {technology}
              </span>
            ))}
        </div>
             {/* Action Buttons */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full"
              >
                <Github className="h-4 w-4" />

                GitHub
              </Button>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full"
              >
                <ArrowUpRight className="h-4 w-4" />

                Live Demo
              </Button>
            </a>
          )}

          <Button
            className="flex-1"
            onClick={() => onViewDetails(project)}
          >
            View Details
          </Button>
        </div>

        {/* Bottom Accent */}

        <div
          className="
            mt-8
            h-px
            bg-gradient-to-r
            from-transparent
            via-border
            to-transparent
          "
        />
             {/* Footer */}

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-foreground-muted">
              Duration
            </p>

            <p className="mt-1 text-sm font-semibold text-foreground">
              {project.duration}
            </p>
          </div>

          {project.featured && (
            <span
              className="
                rounded-full
                bg-primary/10
                px-3
                py-1
                text-xs
                font-semibold
                text-primary
              "
            >
              Featured
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;      