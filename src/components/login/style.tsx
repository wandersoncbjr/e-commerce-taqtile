import styled from "styled-components";
import { colors } from "../typography/colors";

export const ContainerModalStyled = styled.div`
  width: 380px;
  z-index: 3;
  position: absolute;
  padding: 14px;
  top: 8%;
`;

export const BackDropStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 20%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: all;
  z-index: 2;
`;

export const ArrowUpStyled = styled.div`
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid ${colors.baseWhite};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const ContainerLoginStyled = styled.div`
  padding: 32px;
  background-color: ${colors.baseWhite};
  box-shadow: -1px -2px 47px -25px rgba(0, 0, 0, 0.75);
  border-radius: 16px;
`;

export const WrapperButtonLoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const WrapperTitleButtonLinkStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 8px;
`;
