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
  width: 214px;
  margin: 16px;

  @media (max-width: 768px) {
    width: 260px;
  }
`;

export const ContainerButtonStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const WrapperButtonStyled = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerImgStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
    width: 120px;
    height: 120px;
  }
`;

export const ContainerImgBannerStyled = styled(ContainerImgStyled)`
  margin: 20px 0 20px 0px;
  img {
    object-fit: cover;
    border-radius: 24px;
    width: 85%;
    height: 145px;

    @media (min-width: 768px) {
      height: 100%;
    }
  }
`;
