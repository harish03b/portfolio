import { HTMLAttributes } from "react";

export interface SectionHeadingProps
  extends HTMLAttributes<HTMLDivElement> {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}