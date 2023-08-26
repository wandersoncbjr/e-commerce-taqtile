import { Container } from "../inputs/Input/styles";
import { ButtonStyled, ContainerStyled, InputStyled } from "./style";
import { IconSubtracting } from "../../assets/icons/icon-stepper-subtracting";
import { ChangeEvent, useState } from "react";
import { colors } from "../typography/colors";
import { IconAdding } from "../../assets/icons/icon-adding";

export function Stepper() {
  const [valueButton, SetvalueButton] = useState("0");

  function handleDecrease() {
    const newValue = Number(valueButton) - 1;
    if (newValue >= 0) {
      SetvalueButton(newValue.toString());
    }
  }

  function handleIncrease() {
    const newValue = Number(valueButton) + 1;
    SetvalueButton(newValue.toString());
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    SetvalueButton(e.target.value);
  }

  return (
    <Container>
      <ContainerStyled>
        <ButtonStyled onClick={handleDecrease}>
          <IconSubtracting
            color={
              valueButton === "0" ? colors.baseGrayLight : colors.brandPrimary
            }
          />
        </ButtonStyled>
        <InputStyled
          value={valueButton}
          onChange={handleChange}
          type="number"
          min="0"
        />
        <ButtonStyled onClick={handleIncrease}>
          <IconAdding />
        </ButtonStyled>
      </ContainerStyled>
    </Container>
  );
}
