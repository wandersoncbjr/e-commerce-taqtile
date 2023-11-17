import styled from "styled-components";
import { colors } from "../colors";
import { constants } from "..";

export const FormsInputValue = styled.p`
  color: ${colors.baseGrayXdark};
  font-family: ${constants.font.primary};
  font-size: ${constants.size.medium};
  font-weight: ${constants.weight.regular};
  line-height: ${constants.lineHeight.xLarge};
`;
