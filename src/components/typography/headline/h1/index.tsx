import { ReactNode } from "react";
import { H1Style } from "./styles";

interface H1Props {
  children: ReactNode;
}

export function H1({ children }: H1Props) {
  return <H1Style>{children}</H1Style>;
}
