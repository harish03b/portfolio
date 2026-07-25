import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { CardProps } from "./Card.types";
import { cardVariants } from "./cardVariants";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({
            variant,
            padding,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;