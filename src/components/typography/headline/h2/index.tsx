import { ReactNode } from "react";
import { H2Style} from "./styles";

interface H2Props {
  children: ReactNode;
}

export function H2({ children }: H2Props) {
  return <H2Style>{children}</H2Style>;
}
