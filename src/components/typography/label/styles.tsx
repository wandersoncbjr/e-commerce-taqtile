import { styled } from "styled-components";
import { constants } from "..";
import { LabelProps } from ".";
import { colors } from "../colors";

type LabelStyleProps = Pick<LabelProps, "error">;

export const LabelStyle = styled.label<LabelStyleProps>`
  color: ${(props) => (props.error ? colors.statesError : colors.baseGrayDark)};
  font-family: ${constants.font.primary};
  font-size: ${constants.size.medium};
  font-weight: ${constants.weight.regular};
  line-height: ${constants.lineHeight.xLarge};
`;
