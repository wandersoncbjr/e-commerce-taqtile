import { styled } from "styled-components";
import { colors } from "../../typography/colors";
import { constants } from "../../typography";
import { InputProps } from ".";

export const InputStyle = styled.input`
  font-family: ${constants.font.primary};
  font-size: ${constants.size.medium};
  width: 100%;
  border: none;
  outline: 0;
  background-color: transparent;
`;
type LabelAndContainerProps = Pick<InputProps, "error">;

export const Label = styled.label<LabelAndContainerProps>`
  font-family: ${constants.font.primary};
  color: ${({ error }) => (error ? colors.statesError : colors.baseGrayDark)};
  font-size: ${constants.size.medium};
  font-weight: ${constants.weight.regular};
  line-height: ${constants.lineHeight.xLarge};
`;

export const Container = styled.div<LabelAndContainerProps>`
  width: 100%;
  display: flex;
  padding: 12px 12px;
  background-color: ${colors.baseBackground};
  border: ${({ error }) =>
    error
      ? `2px solid ${colors.statesError}`
      : ` 1px solid${colors.baseGrayLight}`};
  border-radius: ${constants.radius.smallRadius};

  &:focus-within {
    border: double 2px transparent;
    background-image: ${colors.brandPrimaryGradient};
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
`;

export const Caption = styled.p`
  font-family: ${constants.font.primary};
  color: ${colors.statesError};
  font-size: ${constants.size.small};
  font-weight: ${constants.weight.regular};
  line-height: ${constants.lineHeight.xLarge};
`;
