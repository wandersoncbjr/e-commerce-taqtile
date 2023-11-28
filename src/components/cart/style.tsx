import styled from "styled-components";
import { colors } from "../typography/colors";

export const ContainerCartStyled = styled.div`
  background-color: ${colors.baseWhite};
  border-radius: 8px;
  margin-top: 16px;
  box-shadow: 0px 2px 8px 0px rgba(55, 84, 102, 0.15);
  overflow: hidden;
`;

export const WrapperCartStyled = styled.div`
  background-color: ${colors.baseBackground};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContainerCartButtonStyled = styled.div`
  display: flex;
  padding: 16px;
`;
export const ContainerButtonAddCartStyled = styled.div`
  margin: 16px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    button {
      width: 100%;
      justify-content: space-between;
    }
  }
`;
