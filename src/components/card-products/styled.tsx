import { styled } from "styled-components";
import { colors } from "../typography/colors";
import { constants } from "../typography";

export const CardProductsContainerStyled = styled.div`
  border-radius: ${constants.radius.smallRadius};
  background-color: ${colors.baseWhite};
  padding: 16px;
  box-shadow: 0px 2px 8px 0px ${colors.boxShadow};
  display: flex;
  flex-direction: column;
`;

export const ContainerButtonStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: block;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const ContainerImgStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerImgBannerStyled = styled(ContainerImgStyled)`
  img {
    object-fit: cover;

    padding: 12px;
    border-radius: 24px;
  }
`;
