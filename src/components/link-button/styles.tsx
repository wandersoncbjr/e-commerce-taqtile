import { styled } from "styled-components";
import { LinkButtonProps } from ".";
import { colors } from "../typography/colors";

export const ContainerLink = styled.button<LinkButtonProps>`
  color: ${(props) =>
    props.variant === "destructive" ? colors.statesError : colors.brandCtaDark};
  width: ${(props) => (props.expanded ? "100%" : "")};
  display: flex;
  border: none;
  gap: 4px;
  justify-content: center;
  background: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
