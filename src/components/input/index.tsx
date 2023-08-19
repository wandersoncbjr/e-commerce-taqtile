import { useId } from "react";
import { InputHTMLAttributes } from "react";
import * as S from "./styles";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  type?: string;
}

export function Input({ label, type, error, ...rest }: InputProps) {
  const labelId = useId();
  return (
    <>
      {label && <S.Label error={ error} htmlFor={labelId}>{label}</S.Label>}
      <S.Container error={error}>
        <S.Input type={type} {...rest} id={labelId}></S.Input>
      </S.Container>
    </>
  );
}
