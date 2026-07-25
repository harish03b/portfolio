import { Download } from "lucide-react";

import Button from "@/components/ui/Button";

import type {
  ContactContentProps,
} from "./ContactContent.types";

const ContactContent = ({
  title,
  description,
  resume,
}: ContactContentProps) => {
  return (
    <div>
      {/* Heading */}

      <h2
        className="
          text-4xl
          font-bold
          leading-tight
        "
      >
        {title}
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-foreground-muted
        "
      >
        {description}
      </p>

      {/* Resume Button */}

      <div className="mt-12">
        <a
  href={resume}
  download
>
  <Button size="lg">
    <Download
      className="
        mr-2
        h-5
        w-5
      "
    />

    Download Resume
  </Button>
</a>
      </div>
    </div>
  );
};

export default ContactContent;