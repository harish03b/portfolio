import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "border",
    "px-3",
    "py-1",
    "text-xs",
    "font-medium",
    "transition-colors",
    "duration-200",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "border-transparent",
          "bg-primary/10",
          "text-primary",
        ],

        secondary: [
          "border-border",
          "bg-background-secondary",
          "text-foreground",
        ],

        outline: [
          "border-border",
          "bg-transparent",
          "text-foreground-muted",
        ],

        success: [
          "border-transparent",
          "bg-success/10",
          "text-success",
        ],

        warning: [
          "border-transparent",
          "bg-warning/10",
          "text-warning",
        ],

        error: [
          "border-transparent",
          "bg-error/10",
          "text-error",
        ],
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  },
);