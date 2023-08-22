import { styled } from "styled-components";
import { constants } from "..";
import { colors } from "../colors";

export const Desktop = styled.h4`
color: ${colors.baseGrayDark};
  font-family: ${constants.font.primary};
  font-size: ${constants.size.large};
  font-weight: ${constants.weight.semiBold};
  line-height: ${constants.lineHeight.xxLarge};
`;
