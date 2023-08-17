import { ReactNode } from "react";
import * as S from "./styles";

interface H2Props {
  children: ReactNode;
}

export function H2({ children }: H2Props) {
  return <S.H2>{children}</S.H2>;
}
