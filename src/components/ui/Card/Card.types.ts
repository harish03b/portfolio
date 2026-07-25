import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { cardVariants } from "./cardVariants";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}