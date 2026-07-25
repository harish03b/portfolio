import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type { ButtonProps } from "./Button.types";
import { buttonVariants } from "./buttonVariants";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        aria-busy={loading}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      >
        {loading && (
          <Loader2
            className="h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        )}

        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;