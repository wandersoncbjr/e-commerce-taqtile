import styled from "styled-components";
import { constants } from "../..";
import { colors } from "../../colors";

export const H3 = styled.h3`
  font-family: ${constants.font.primary};
  font-size: ${constants.size.xLarge};
  font-weight: ${constants.weight.bold};
  line-height: ${constants.lineHeight.xxxLarge};
  color: ${colors.baseGrayDark};
`;
