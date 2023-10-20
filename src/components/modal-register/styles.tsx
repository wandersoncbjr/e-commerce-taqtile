import styled from "styled-components";
import { colors } from "../typography/colors";

export const ContainerRegisterStyled = styled.div`
  box-shadow: -1px 4px 5px 7px rgba(0, 0, 0, 0.04);
  background-color: ${colors.baseWhite};
  position: fixed;
  top: 0;
  z-index: 5;
  left: 0;
  right: 15%;
`;
export const WrapperRegisterStyled = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WrapperRegisterButtonsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
