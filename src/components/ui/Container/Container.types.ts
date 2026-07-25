import { HTMLAttributes, JSX } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
}