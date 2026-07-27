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
        shadow-xl
      "
    >
      {/* Cover */}

      <div
        className="
          h-36
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
            -mt-16
            h-36
            w-36
            rounded-full
            border-4
            border-card
            object-cover
            shadow-2xl
          "
        />
      </div>

      {/* Basic Information */}

      <div className="px-8 pt-7 text-center">
        <h3
          className="
            text-3xl
            font-bold
            text-foreground
          "
        >
          {portfolio.profile.fullName}
        </h3>

        <p
          className="
            mt-3
            text-lg
            font-medium
            text-primary
          "
        >
          AI + Full Stack Developer
        </p>

        <div
          className="
            mt-5
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

        <p
          className="
            mt-4
            leading-7
            text-foreground-muted
          "
        >
          {portfolio.contact.description}
        </p>
      </div>
            {/* Statistics */}

      <div className="mt-8 border-t border-border px-8 py-8">
        <div className="grid grid-cols-2 gap-6">

          {/* Projects */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-background
              p-6
              text-center
              transition-all
              duration-300
              hover:border-primary
              hover:-translate-y-1
            "
          >
            <Briefcase
              className="
                mx-auto
                h-6
                w-6
                text-primary
              "
            />

            <p
              className="
                mt-3
                text-2xl
                font-bold
              "
            >
              {portfolio.statistics[0].value}
            </p>

            <p
              className="
                mt-2
                text-xs
                uppercase
                tracking-wider
                text-foreground-muted
              "
            >
              Projects
            </p>
          </div>

          {/* Technologies */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-background
              p-6
              text-center
              transition-all
              duration-300
              hover:border-primary
              hover:-translate-y-1
            "
          >
            <Code2
              className="
                mx-auto
                h-6
                w-6
                text-primary
              "
            />

            <p
              className="
                mt-3
                text-2xl
                font-bold
              "
            >
              {portfolio.statistics[2].value}
            </p>

            <p
              className="
                mt-2
                text-xs
                uppercase
                tracking-wider
                text-foreground-muted
              "
            >
              Technologies
            </p>
          </div>

          {/* Internships */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-background
              p-6
              text-center
              transition-all
              duration-300
              hover:border-primary
              hover:-translate-y-1
            "
          >
            <Briefcase
              className="
                mx-auto
                h-6
                w-6
                text-primary
              "
            />

            <p
              className="
                mt-3
                text-2xl
                font-bold
              "
            >
              {portfolio.statistics[1].value}
            </p>

            <p
              className="
                mt-2
                text-xs
                uppercase
                tracking-wider
                text-foreground-muted
              "
            >
              Internships
            </p>
          </div>

          {/* CGPA */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-background
              p-6
              text-center
              transition-all
              duration-300
              hover:border-primary
              hover:-translate-y-1
            "
          >
            <GraduationCap
              className="
                mx-auto
                h-6
                w-6
                text-primary
              "
            />

            <p
              className="
                mt-3
                text-2xl
                font-bold
              "
            >
              {portfolio.statistics[3].value}
            </p>

            <p
              className="
                mt-2
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
            p-6
            transition-all
            duration-300
            hover:border-emerald-500/40
          "
        >
          <div className="flex items-start gap-4">
            <span
              className="
                mt-1
                h-3
                w-3
                shrink-0
                rounded-full
                bg-emerald-500
                animate-pulse
              "
            />

            <div>
              <p
                className="
                  text-base
                  font-semibold
                  text-emerald-600
                "
              >
                {portfolio.profile.availability}
              </p>

              <p
                className="
                  mt-2
                  leading-7
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
    </aside>
  );
};

export default ProfileCard;