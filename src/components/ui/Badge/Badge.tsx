import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { BadgeProps } from "./Badge.types";
import { badgeVariants } from "./badgeVariants";

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;