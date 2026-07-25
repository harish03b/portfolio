import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/cn";

import { ThemeToggleProps } from "./ThemeToggle.types";

const ThemeToggle = ({
  className,
  ...props
}: ThemeToggleProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card",
          className,
        )}
        disabled
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card transition-colors duration-200 hover:bg-background-secondary",
        className,
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      {...props}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;