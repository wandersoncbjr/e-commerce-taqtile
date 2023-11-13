import { ReactNode, useState, forwardRef } from "react";
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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, error, icon, ...rest }, ref) => {
    const labelId = useId();
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev);
    };

    return (
      <WrapperInputStyled>
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
            ref={ref}
          />
          {type === "password" ? (
            <IconPassword onClick={togglePasswordVisibility} />
          ) : null}
          {icon}
        </InputContainerStyled>
        {error && (
          <>
            <SeparatorStyle size="small" />
            <Caption>{error}</Caption>
          </>
        )}
      </WrapperInputStyled>
    );
  }
);
