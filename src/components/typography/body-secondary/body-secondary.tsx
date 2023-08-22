import { styled } from "styled-components";
import { constants } from "..";
import { colors } from "../colors";

export const BodySecondary = styled.p`
  font-family: ${constants.font.primary};
  font-size: ${constants.size.small};
  font-weight: ${constants.weight.regular};
  line-height: ${constants.lineHeight.large};
  color: ${colors.baseGray};
`;
