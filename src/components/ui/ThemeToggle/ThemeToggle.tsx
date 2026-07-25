import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";

import type { ThemeToggleProps } from "./ThemeToggle.types";

const ThemeToggle = ({
  ...props
}: ThemeToggleProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="ghost"
        disabled
        aria-label="Toggle theme"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      onClick={() =>
        setTheme(
          isDark
            ? "light"
            : "dark",
        )
      }
      {...props}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;