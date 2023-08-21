import { SelectHTMLAttributes } from "react";
import { Separator } from "../../separator";
import { Caption, Container, Label } from "../Input/styles";
import { SelectStyle } from "./style";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  option: string[];
  label?: string;
  error?: string;
}

export function Select({ option, label, error, ...rest }: SelectProps) {
  return (
    <>
      <Label error={error}>{label}</Label>
      <Container>
        <SelectStyle name="select" {...rest}>
          <option value="" disabled selected>
            Selecione...
          </option>
          {option.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
          +
        </SelectStyle>
      </Container>
      <Separator size="small" />
      {error && <Caption>{error}</Caption>}
    </>
  );
}
