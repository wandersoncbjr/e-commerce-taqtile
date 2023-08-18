import { ReactNode } from "react";
import { Label } from "../typography/label";
import * as S from "./styles";

interface InputProps {
  children: ReactNode;
}

export function Input({ children }: InputProps) {
  return (
    <div>
      <Label error>{children}</Label>
      <S.IntputContainer></S.IntputContainer>
    </div>
  );
}
