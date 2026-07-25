import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { badgeVariants } from "./badgeVariants";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}