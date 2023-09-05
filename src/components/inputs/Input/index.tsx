import { ReactNode, useState } from "react";
import { useId } from "react";
import { InputHTMLAttributes } from "react";
import {
  Label,
  InputContainerStyled,
  InputStyle,
  Caption,
  WrapperInputStyled,
} from "./styles";
import { SeparatorStyle } from "../../separator/styles";
import { IconPassword } from "../../../assets/icons/icon-password";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
  icon?: ReactNode;
  expanded?: boolean;
}

export function Input({
  label,
  type,
  error,
  icon,
  expanded,
  ...rest
}: InputProps) {
  const labelId = useId();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <WrapperInputStyled expanded={expanded}>
      {label && (
        <Label error={error} htmlFor={labelId}>
          {label}
        </Label>
      )}
      <SeparatorStyle size="small" />
      <InputContainerStyled error={error}>
        <InputStyle
          type={isPasswordVisible ? "text" : type}
          {...rest}
          id={labelId}
        />
        {type === "password" ? (
          <IconPassword onClick={togglePasswordVisibility} />
        ) : null}
        {icon && icon}
      </InputContainerStyled>
      <SeparatorStyle size="small" />
      {error && <Caption>{error}</Caption>}
    </WrapperInputStyled>
  );
}
