import { styled } from "styled-components";
import { LinkButtonProps } from ".";
import { colors } from "../typography/colors";

export const ContainerLink = styled.button<LinkButtonProps>`
  color: ${(props) =>
    props.variant === "destructive" ? colors.statesError : colors.brandCtaDark};
  width: ${(props) => (props.expanded ? "100%" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px 16px;
`;
