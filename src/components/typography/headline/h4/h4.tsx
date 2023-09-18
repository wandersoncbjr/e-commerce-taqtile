import { styled } from "styled-components";
import { colors } from "../../colors";
import { constants } from "../..";

type H4Props = {
  color?: "baseGray" | "baseGrayDark" | "brandCtaDark";
};

export const H4 = styled.h4<H4Props>`
  color: ${({ color }) =>
    color === "baseGray"
      ? colors.baseGray
      : color === "brandCtaDark"
      ? colors.brandCtaDark
      : colors.baseGrayDark};
  font-family: ${constants.font.primary};
  font-size: ${constants.size.large};
  font-weight: ${constants.weight.semiBold};
  line-height: ${constants.lineHeight.xxLarge};
`;
