import { styled } from "styled-components";
import { colors } from "../colors";
import { constants } from "..";

export const Price = styled.p`
  color: ${colors.brandPrimary};
  font-family: ${constants.font.primary};
  font-size: ${constants.size.xLarge};
  font-weight: ${constants.weight.bold};
  line-height: ${constants.lineHeight.xLarge};
`;
