import styled from "styled-components";
import { colors } from "../../typography/colors";

export const ContainerButtonAddCart = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonAddCartStyled = styled.button`
  padding: 12px;
  background-color: ${colors.baseBackground};
  border-radius: 10px;
  border: 1px solid ${colors.baseGrayLight};
  display: flex;
  align-items: center;
  gap: 4px;
`;
