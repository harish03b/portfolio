import {
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import type {
  ContactLinksProps,
} from "./ContactLinks.types";

const ContactLinks = ({
  email,
  linkedin,
  github,
  location,
}: ContactLinksProps) => {
  return (
    <div className="space-y-8">

      {/* Email */}

      <a
        href={`mailto:${email}`}
        className="
          group
          flex
          items-center
          gap-5
          transition-all
          duration-300
          hover:text-primary
        "
      >
        <Mail
          className="
            h-6
            w-6
            text-primary
          "
        />

        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-wider
              text-foreground-muted
            "
          >
            Email
          </p>

          <p
            className="
              mt-1
              text-lg
              font-medium
            "
          >
            {email}
          </p>
        </div>
      </a>

      {/* LinkedIn */}

      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          items-center
          gap-5
          transition-all
          duration-300
          hover:text-primary
        "
      >
        <Linkedin
          className="
            h-6
            w-6
            text-primary
          "
        />

        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-wider
              text-foreground-muted
            "
          >
            LinkedIn
          </p>

          <p
            className="
              mt-1
              text-lg
              font-medium
            "
          >
            {linkedin.replace(
              "https://",
              "",
            )}
          </p>
        </div>
      </a>
            {/* GitHub */}

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          items-center
          gap-5
          transition-all
          duration-300
          hover:text-primary
        "
      >
        <Github
          className="
            h-6
            w-6
            text-primary
          "
        />

        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-wider
              text-foreground-muted
            "
          >
            GitHub
          </p>

          <p
            className="
              mt-1
              text-lg
              font-medium
            "
          >
            {github.replace(
              "https://",
              "",
            )}
          </p>
        </div>
      </a>

      {/* Location */}

      <div
        className="
          flex
          items-center
          gap-5
        "
      >
        <MapPin
          className="
            h-6
            w-6
            text-primary
          "
        />

        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-wider
              text-foreground-muted
            "
          >
            Location
          </p>

          <p
            className="
              mt-1
              text-lg
              font-medium
            "
          >
            {location}
          </p>
        </div>
      </div>

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
          </div>
  );
};

export default ContactLinks;