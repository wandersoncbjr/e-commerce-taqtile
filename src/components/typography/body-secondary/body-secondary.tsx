import { styled } from "styled-components";
import { constants } from "..";
import { colors } from "../colors";

interface BodySecondaryProps {
  scratched?: boolean;
  color?: "brandCtaDark" | "baseGray" | "baseGrayXDark";
  weight?: "semiBold";
}

const colorsMap = {
  brandCtaDark: colors.brandCtaDark,
  baseGray: colors.baseGray,
  baseGrayXDark: colors.baseGrayXDark,
};

export const BodySecondary = styled.p<BodySecondaryProps>`
  text-decoration: ${({ scratched }) => (scratched ? "line-through" : "")};
  font-family: ${constants.font.primary};
  font-size: ${constants.size.small};
  font-weight: ${({ weight }) =>
    weight ? constants.weight.semiBold : constants.weight.regular};
  line-height: ${constants.lineHeight.large};
  color: ${({ color = "baseGray" }) => colorsMap[color]};
`;
