/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },

      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",

        "background-secondary":
          "rgb(var(--background-secondary) / <alpha-value>)",

        "background-tertiary":
          "rgb(var(--background-tertiary) / <alpha-value>)",

        foreground:
          "rgb(var(--foreground) / <alpha-value>)",

        "foreground-muted":
          "rgb(var(--foreground-muted) / <alpha-value>)",

        "foreground-subtle":
          "rgb(var(--foreground-subtle) / <alpha-value>)",

        card: "rgb(var(--card) / <alpha-value>)",

        "card-foreground":
          "rgb(var(--card-foreground) / <alpha-value>)",

        border:
          "rgb(var(--border) / <alpha-value>)",

        input:
          "rgb(var(--input) / <alpha-value>)",

        ring:
          "rgb(var(--ring) / <alpha-value>)",

        primary:
          "rgb(var(--primary) / <alpha-value>)",

        "primary-hover":
          "rgb(var(--primary-hover) / <alpha-value>)",

        "primary-foreground":
          "rgb(var(--primary-foreground) / <alpha-value>)",

        secondary:
          "rgb(var(--secondary) / <alpha-value>)",

        "secondary-foreground":
          "rgb(var(--secondary-foreground) / <alpha-value>)",

        muted:
          "rgb(var(--muted) / <alpha-value>)",

        "muted-foreground":
          "rgb(var(--muted-foreground) / <alpha-value>)",

        success:
          "rgb(var(--success) / <alpha-value>)",

        warning:
          "rgb(var(--warning) / <alpha-value>)",

        error:
          "rgb(var(--error) / <alpha-value>)",

        info:
          "rgb(var(--info) / <alpha-value>)",
      },

      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },

      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },

      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },

  plugins: [],
};