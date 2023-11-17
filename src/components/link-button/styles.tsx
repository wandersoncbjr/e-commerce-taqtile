import { styled } from "styled-components";
import { LinkButtonProps } from ".";
import { colors } from "../typography/colors";

const colorMap = {
  destructive: colors.statesError,
  baseGray: colors.baseGray,
  default: colors.brandCtaDark,
};

export const ContainerLink = styled.button<LinkButtonProps>`
  color: ${({ variant }) => colorMap[variant] || colorMap.default};
  width: ${({ expanded }) => (expanded ? "100%" : "")};
  display: flex;
  border: none;
  gap: 8px;
  justify-content: center;
  background: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
