import { styled } from "styled-components";
import { constants } from "..";
import { colors } from "../colors";

interface BodySecondaryProps {
  scratched?: boolean;
}
export const BodySecondary = styled.p<BodySecondaryProps>`
  text-decoration: ${({ scratched }) => (scratched ? "line-through" : "")};
  font-family: ${constants.font.primary};
  font-size: ${constants.size.small};
  font-weight: ${constants.weight.regular};
  line-height: ${constants.lineHeight.large};
  color: ${colors.baseGray};
`;
