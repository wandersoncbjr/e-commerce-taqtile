import { styled } from "styled-components";
import { colors } from "../../colors";
import { constants } from "../..";


export const H4 = styled.h4`
color: ${colors.baseGrayDark};
  font-family: ${constants.font.primary};
  font-size: ${constants.size.large};
  font-weight: ${constants.weight.semiBold};
  line-height: ${constants.lineHeight.xxLarge};
`;
