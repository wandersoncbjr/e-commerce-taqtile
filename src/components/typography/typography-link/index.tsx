import { ReactNode } from "react";
import * as S from "./styles";

interface ButtonsLinksProps {
  children: ReactNode;
}

export function TypographyLink({ children }: ButtonsLinksProps) {
  return <S.TypographyButton>{children}</S.TypographyButton>;
}
