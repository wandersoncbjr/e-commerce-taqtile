import { styled } from "styled-components";
import { constants } from "../..";
import { colors } from "../../colors";

export const H2 = styled.h1`
  font-family: ${constants.font.primary};
  color: ${colors.brandPrimary};
  font-size: ${constants.size.xLarge};
  font-weight: ${constants.weight.bold};
  line-height: ${constants.lineHeight.xLarge};
`;
