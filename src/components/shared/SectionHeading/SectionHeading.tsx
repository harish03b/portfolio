import { cn } from "@/lib/cn";

import { SectionHeadingProps } from "./SectionHeading.types";

const SectionHeading = ({
  overline,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {overline && (
        <span className="caption">
          {overline}
        </span>
      )}

      <h2 className="heading-1 mt-3">
        {title}
      </h2>

      {description && (
        <p className="body-lg mt-5">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;