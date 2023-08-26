import { styled } from "styled-components";

export const InputStyled = styled.input.attrs({
  type: "number",
})`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 100%;
  background-color: transparent;
  text-align: center;
  outline: none;
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
