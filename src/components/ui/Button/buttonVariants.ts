import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "rounded-md",
    "font-medium",
    "transition-all",
    "duration-normal",
    "focus-ring",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary",
          "text-primary-foreground",
          "hover:bg-primary-hover",
        ],

        secondary: [
          "bg-secondary",
          "text-secondary-foreground",
          "hover:bg-background-tertiary",
        ],

        outline: [
          "border",
          "border-border",
          "bg-transparent",
          "hover:bg-background-secondary",
        ],

        ghost: [
          "bg-transparent",
          "hover:bg-background-secondary",
        ],
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-5 text-sm",

        lg: "h-12 px-6 text-base",

        icon: "h-11 w-11",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);