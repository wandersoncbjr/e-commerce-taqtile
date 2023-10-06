import { styled } from "styled-components";
import { constants } from "../..";
import { colors } from "../../colors";

export const H2Style = styled.h2`
  font-family: ${constants.font.primary};
  color: ${colors.brandPrimary};
  font-size: ${constants.size.xLarge};
  font-weight: ${constants.weight.bold};
  line-height: ${constants.lineHeight.xLarge};
`;
