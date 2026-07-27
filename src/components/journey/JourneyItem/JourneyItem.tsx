import {
  Briefcase,
  Calendar,
  GraduationCap,
  MapPin,
} from "lucide-react";

import type { JourneyItemProps } from "./JourneyItem.types";

const JourneyItem = ({
  item,
}: JourneyItemProps) => {
  return (
    <div
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-border
    bg-card
    p-7
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-primary
    hover:shadow-[0_25px_60px_rgba(59,130,246,0.18)]
  "
>
      {/* Top Gradient */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-1
          bg-gradient-to-r
          from-primary
          via-cyan-400
          to-blue-500
        "
      />

      {/* Header */}

      <div className="flex items-start gap-4">
        <div
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
          "
        >
          {item.type === "experience" ? (
            <Briefcase
              className="
                h-8
                w-8
                text-primary
              "
            />
          ) : (
            <GraduationCap
              className="
                h-8
                w-8
                text-primary
              "
            />
          )}
        </div>

        <div className="flex-1">
          <h3
            className="
              text-2xl
              font-bold
              leading-tight
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-2
              text-primary
              font-medium
            "
          >
            {item.subtitle}
          </p>
        </div>
      </div>

      {/* Meta Information */}

      <div
        className="
          mt-6
          flex
          flex-wrap
          gap-8
          text-sm
          text-foreground-muted
        "
      >
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />

          {item.duration}
        </div>

        {item.location && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />

            {item.location}
          </div>
        )}
      </div>
            {/* Description */}

      {item.description.length > 0 && (
        <div className="mt-6">
          <h4
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-primary
            "
          >
            {item.type === "experience"
              ? "Key Contributions"
              : "Specialization"}
          </h4>

          <ul className="mt-4 space-y-2">
            {item.description.map((text) => (
              <li
                key={text}
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    mt-2
                    h-2
                    w-2
                    rounded-full
                    bg-primary
                  "
                />

                <span
                  className="
                    text-sm
                    leading-6
                    text-foreground-muted
                  "
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}

      {item.tags.length > 0 && (
        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-primary/20
                bg-primary/10
                px-4
                py-2
                text-xs
                font-medium
                text-primary
                transition-all
                duration-300
                hover:bg-primary
                hover:text-primary-foreground
              "
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Score */}

      {item.score && (
        <div className="mt-6">
          <span
            className="
              inline-flex
              rounded-full
              bg-emerald-500/10
              px-5
py-2.5
              text-sm
              font-semibold
              text-emerald-500
            "
          >
            {item.type === "education"
              ? `Score: ${item.score}`
              : item.score}
          </span>
        </div>
      )}
             {/* Bottom Divider */}

      <div
        className="
          mt-10
          h-px
          bg-gradient-to-r
          from-transparent
          via-border
          to-transparent
        "
      />

      {/* Decorative Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-primary/5
          blur-3xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </div>
  );
};

export default JourneyItem;