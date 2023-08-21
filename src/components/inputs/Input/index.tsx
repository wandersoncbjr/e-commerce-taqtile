import { useState } from "react";
import { useId } from "react";
import { InputHTMLAttributes } from "react";
import { Label, Container, InputStyle, Caption } from "./styles";
import { SeparatorStyle } from "../../separator/styles";
import iconPassword from "./icon-password.svg.svg";


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
}

export function Input({ label, type, error, ...rest }: InputProps) {
  const labelId = useId();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
      {label && (
        <Label error={error} htmlFor={labelId}>
          {label}
        </Label>
      )}
      <SeparatorStyle size="small" />
      <Container error={error}>
        <InputStyle
          type={isPasswordVisible ? "text" : type}
          {...rest}
          id={labelId}
        />
        {type === "password" ? (
          <img
            src={iconPassword}
            onClick={togglePasswordVisibility}
            alt="ícone mostrar senha."
            style={{ cursor: "pointer" }}
          />
        ) : null}
      </Container>
      <SeparatorStyle size="small" />
      {error && <Caption>{error}</Caption>}
    </>
  );
}
