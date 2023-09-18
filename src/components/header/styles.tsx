import { styled } from "styled-components";
import { colors } from "../typography/colors";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const ContainerHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 1px 4px 0px ${colors.boxShadowHeader};
  padding: 16px;
  background-color: ${colors.baseWhite};
`;
export const SectionInputStyled = styled.section`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContainerItemStyled = styled.div`
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  white-space: nowrap;
  color: ${colors.baseGray};

  p {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const WrapperIconSearchStyled = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapperItemsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const ContainerInputSearchStyled = styled.div`
  width: 70%;

  @media (max-width: 768px) {
    width: auto;
    display: none;
  }
`;

export const SeparatorUserStyled = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const WrapperIconMenu = styled.div`
  margin: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`;
