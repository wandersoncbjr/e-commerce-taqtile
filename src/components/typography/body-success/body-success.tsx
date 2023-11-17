import styled from "styled-components";
import { colors } from "../colors";
import { constants } from "..";

export const BodySuccess = styled.p`
  font-family: ${constants.font.primary};
  font-size: ${constants.size.large};
  font-weight: ${constants.weight.bold};
  line-height: ${constants.lineHeight.xxLarge};
  color: ${colors.statesSuccess};
`;
