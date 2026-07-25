import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-lg",
    "font-medium",
    "transition-all",
    "duration-200",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary",
    "focus-visible:ring-offset-2",
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
          "hover:bg-primary/90",
        ],

        secondary: [
          "bg-secondary",
          "text-secondary-foreground",
          "hover:bg-secondary/80",
        ],

        outline: [
          "border",
          "border-border",
          "bg-transparent",
          "hover:bg-muted",
        ],

        ghost: [
          "bg-transparent",
          "hover:bg-muted",
        ],

        destructive: [
          "bg-red-600",
          "text-white",
          "hover:bg-red-700",
        ],
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-5 text-sm",

        lg: "h-12 px-6 text-base",

        icon: "h-11 w-11 p-0",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);