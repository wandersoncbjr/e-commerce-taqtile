import { ReactNode } from "react";
import * as S from "./styles";

export interface LabelProps {
  children: ReactNode;
  error?: boolean;
}

export function Label({ children, error }: LabelProps) {
  return <S.LabelStyle error={error}>{children}</S.LabelStyle>;
}
