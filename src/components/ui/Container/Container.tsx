import { ElementType } from "react";

import { cn } from "@/lib/cn";

import { ContainerProps } from "./Container.types";

const Container = ({
  as,
  className,
  children,
  ...props
}: ContainerProps) => {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn("page-container", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;