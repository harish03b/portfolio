import {
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { portfolio } from "@/data/portfolio";

const ProfileCard = () => {
  return (
    <aside
      className="
        sticky
        top-28
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card
        shadow-lg
      "
    >
      {/* Cover */}

      <div
        className="
          h-28
          bg-gradient-to-r
          from-primary
          via-blue-500
          to-cyan-500
        "
      />

      {/* Avatar */}

      <div className="relative flex justify-center">
        <img
          src={portfolio.profile.profileImage}
          alt={portfolio.profile.fullName}
          className="
            -mt-14
            h-28
            w-28
            rounded-full
            border-4
            border-card
            object-cover
            shadow-xl
          "
        />
      </div>

      {/* Basic Info */}

      <div className="px-8 pt-5 text-center">
        <h3
          className="
            text-2xl
            font-bold
            text-foreground
          "
        >
          {portfolio.profile.fullName}
        </h3>

        <p
          className="
            mt-2
            font-medium
            text-primary
          "
        >
          AI + Full Stack Developer
        </p>

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
            text-sm
            text-foreground-muted
          "
        >
          <MapPin className="h-4 w-4" />

          {`${portfolio.profile.location.city}, ${portfolio.profile.location.state}`}
        </div>
      </div>

      {/* Professional Summary */}

      <div className="mt-8 border-t border-border px-8 pt-8">
        <h4
          className="
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-primary
          "
        >
          Professional Summary
        </h4>

        {portfolio.contact.description}
      </div>
            {/* Statistics */}

      <div className="mt-8 border-t border-border px-8 py-8">
        <div className="grid grid-cols-2 gap-5">
          <div
            className="
              rounded-2xl
              border
              border-border
              bg-background
              p-5
              text-center
            "
          >
            <Briefcase
              className="
                mx-auto
                h-5
                w-5
                text-primary
              "
            />

            {portfolio.statistics[0].value}

            <p
              className="
                mt-1
                text-xs
                uppercase
                tracking-wider
                text-foreground-muted
              "
            >
              Projects
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-background
              p-5
              text-center
            "
          >
            <Code2
              className="
                mx-auto
                h-5
                w-5
                text-primary
              "
            />

            {portfolio.statistics[2].value}

            <p
              className="
                mt-1
                text-xs
                uppercase
                tracking-wider
                text-foreground-muted
              "
            >
              Technologies
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-background
              p-5
              text-center
            "
          >
            <Briefcase
              className="
                mx-auto
                h-5
                w-5
                text-primary
              "
            />

            {portfolio.statistics[1].value}

            <p
              className="
                mt-1
                text-xs
                uppercase
                tracking-wider
                text-foreground-muted
              "
            >
              Internships
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-background
              p-5
              text-center
            "
          >
            <GraduationCap
              className="
                mx-auto
                h-5
                w-5
                text-primary
              "
            />

            {portfolio.statistics[3].value}

            <p
              className="
                mt-1
                text-xs
                uppercase
                tracking-wider
                text-foreground-muted
              "
            >
              CGPA
            </p>
          </div>
        </div>
      </div>
             {/* Availability */}

      <div className="border-t border-border px-8 py-8">
        <div
          className="
            rounded-2xl
            border
            border-emerald-500/20
            bg-emerald-500/10
            p-5
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />

            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  text-emerald-600
                "
              >
               {portfolio.profile.availability}
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-foreground-muted
                "
              >
                Open to Full-Time Software Engineer,
                AI Engineer and Full Stack Developer
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div
        className="
          border-t
          border-border
          bg-background-secondary/40
          px-8
          py-5
          text-center
        "
      >
        {portfolio.hero.heading.join(" ")}
      </div>
    </aside>
  );
};

export default ProfileCard;