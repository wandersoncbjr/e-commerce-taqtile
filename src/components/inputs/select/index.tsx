import { SelectHTMLAttributes } from "react";
import { Separator } from "../../separator";
import { Caption, InputContainerStyled, Label } from "../Input/styles";
import { SelectStyle } from "./style";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  option: string[];
  label?: string;
  error?: string;
  placeholder?: string;
}

export function Select({
  option,
  label,
  error,
  placeholder,
  ...rest
}: SelectProps) {
  return (
    <div>
      <Label error={error}>{label}</Label>
      <Separator size="small" />
      <InputContainerStyled>
        <SelectStyle name="select" {...rest}>
          <option value="" disabled selected>
            {placeholder}
          </option>
          {option.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
          +
        </SelectStyle>
      </InputContainerStyled>
      <Separator size="small" />
      {error && <Caption>{error}</Caption>}
    </div>
  );
}
