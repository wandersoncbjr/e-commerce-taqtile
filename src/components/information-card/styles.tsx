import styled from "styled-components";
import { colors } from "../typography/colors";

export const WapperTextCardInformationStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const ContainerCardInformationStyles = styled.div`
  margin-top: 40px;
  border-radius: 12px;
  background-color: ${colors.baseWhite};
  height: 324px;
  width: 272px;
  overflow: auto;
  box-shadow: 0px 2px 8px 0px rgba(55, 84, 102, 0.15);

  img {
    object-fit: cover;
    width: 100%;
  }
`;
