import styled from "styled-components";
import { colors } from "../typography/colors";

export const ContainerSectionSocialMediaStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ContainerSectionDownloadStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const WapperImagesStoreStylde = styled.section`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

export const ContainerSectionServiceStyled = styled.section`
  width: 125px;
`;

export const FooterStyled = styled.footer`
  padding-inline: 64px;
  background-color: ${colors.baseBackground};
`;

export const ContainerFooterStyled = styled.footer`
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 32px;
  gap: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
