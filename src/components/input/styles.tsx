import { styled } from "styled-components";
import { colors } from "../typography/colors";
import { constants } from "../typography";
import { InputProps } from ".";

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
  background-color: transparent;
`;
type LabelProps = Pick<InputProps, "error">;

export const Label = styled.label<LabelProps>`
  color: ${({ error }) => (error ? colors.statesError : colors.baseGrayDark)};
  font-family: ${constants.font.primary};
  font-size: ${constants.size.medium};
  font-weight: ${constants.weight.regular};
  line-height: ${constants.lineHeight.xLarge};
`;

type ContainerProps = Pick<InputProps, "error">;

export const Container = styled.div<ContainerProps>`
  width: 300px;
  padding: 12px 12px;
  background-color: ${colors.baseBackground};
  border: ${({ error }) =>
    error
      ? `2px solid ${colors.statesError}`
      : ` 1px solid${colors.baseGrayLight}`};
  border-radius: ${constants.radius.smallRadius};

  &:focus-within {
    border: 2px solid;
  }
`;
