import styled from "styled-components";
import { colors } from "../typography/colors";

export const ContainerSectionSocialMediaStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ContainerSectionDownloadStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const SectionSocialMediaStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const WapperImagesStoreStylde = styled.section`
  display: flex;
  gap: 8px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export const ContainerSectionServiceStyled = styled.section`
  width: 125px;
`;

export const SectionServiceStyled = styled.section`
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: center;
  }
`;

export const FooterStyled = styled.footer`
  padding: 32px;
  background-color: ${colors.baseBackground};
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContainerFooterStyled = styled.footer`
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 32px;
  gap: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
    margin-top: 30px;
  }
`;

export const WapperFooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SectionTextFooterStyled = styled.section`
  a {
    text-decoration: none;
  }
  li {
    list-style-type: none;
    margin-top: 8px;
  }
`;
