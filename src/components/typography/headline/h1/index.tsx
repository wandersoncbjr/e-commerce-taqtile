import { ReactNode } from "react";
import * as S from "./styles";

interface H1Props {
  children: ReactNode;
}

export function H1({ children }: H1Props) {
  return <S.H1>{children}</S.H1>;
}
