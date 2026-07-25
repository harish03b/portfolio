import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "rounded-lg",
    "border",
    "border-border",
    "bg-card",
    "text-card-foreground",
    "transition-all",
    "duration-200",
  ],
  {
    variants: {
      variant: {
        default: "shadow-sm",

        elevated: "shadow-md",

        outline: "shadow-none",

        interactive: [
          "shadow-sm",
          "hover:-translate-y-1",
          "hover:shadow-lg",
        ],
      },

      padding: {
        none: "",

        sm: "p-4",

        md: "p-6",

        lg: "p-8",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  },
);