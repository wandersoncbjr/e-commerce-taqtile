import styled from "styled-components";

export const WrapperCartPageStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
`;
export const ContainerRightCartStyled = styled.nav`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 52px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ContainerSectionItemsCartStyled = styled.div`
  display: flex;
  gap: 150px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    display: block;
  }
`;
export const ContainerPageCart = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const WrapperCartStyled = styled.div`
  width: 60%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
