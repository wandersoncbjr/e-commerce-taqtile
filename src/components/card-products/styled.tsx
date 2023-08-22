import { styled } from "styled-components";
import { colors } from "../typography/colors";
import { constants } from "../typography";

export const ContainerStyled = styled.div`
  border-radius: ${constants.radius.smallRadius};
  display: flex;
  flex-direction: column;
  width: 214.4px;
  cursor: pointer;
  background-color: ${colors.baseWhite};
  background-color: aqua;
  padding: 16px;
`;

export const ContainerButtonStyled = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;
