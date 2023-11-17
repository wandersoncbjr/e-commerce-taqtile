import styled from "styled-components";
import { colors } from "../typography/colors";

export const ContainerCardCartStyled = styled.div`
  padding: 16px;
  background-color: ${colors.baseWhite};
  width: 100%;
  img {
    width: 48px;
    height: 48px;
    border-radius: 8px;
  }
`;

export const WrapperTextImgCartStyled = styled.div`
  gap: 8px;
  display: flex;
`;

export const WrapperTextStyled = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const WrapperTextStepperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperCartStepperStyled = styled.div`
  width: 120px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const WrapperCartButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
