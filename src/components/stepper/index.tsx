import { Container } from "../inputs/Input/styles";
import { ButtoStyled, ContainerStyled, InputStyled } from "./style";
import iconAdding from "./icon-adding.svg";
import { IconSubtracting } from "./icon-stepper-subtracting";
import { ChangeEvent, useState } from "react";
import { colors } from "../typography/colors";

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
    <>
      <Container>
        <ContainerStyled>
          <ButtoStyled onClick={handleDecrease}>
            <IconSubtracting
              color={
                valueButton === "0" ? colors.baseGrayLight : colors.brandPrimary
              }
            />
          </ButtoStyled>
          <InputStyled
            value={valueButton}
            onChange={handleChange}
            type="number"
            min="0"
          />
          <ButtoStyled onClick={handleIncrease}>
            <img src={iconAdding} alt="adicionar" />
          </ButtoStyled>
        </ContainerStyled>
      </Container>
    </>
  );
}
