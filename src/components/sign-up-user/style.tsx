import styled from "styled-components";
import { colors } from "../typography/colors";

export const WrapperSignUp = styled.form`
  padding: 32px;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;
export const ContainerSignUp = styled.div`
  background-color: ${colors.baseWhite};
  width: 50%;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 80px;
  box-shadow: -1px -2px 47px -25px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-top: 0;
    border-radius: 0;
    width: 100%;
  }
`;
export const ContainerTitleSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperLinkButtonStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const DividerSelectsAndInputsStyled = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
`;
export const WrapperInputsStyled = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DividerInputsStyled = styled(DividerSelectsAndInputsStyled)`
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const WrapperButtonSignUpStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;
