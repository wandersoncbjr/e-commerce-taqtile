import { styled } from "styled-components";
import { constants } from "../..";
import { colors } from "../../colors";

export const H1 = styled.h1`
  font-family: ${constants.font.primary};
  color: ${colors.brandPrimaryDark};
  font-size: ${constants.size.xxxLarge};
  font-weight: ${constants.weight.semiBold};
  line-height: ${constants.lineHeight.xxxxLarge};
`;
