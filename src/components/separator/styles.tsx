import { styled } from "styled-components";
import { SeparatorProps } from ".";

export const Separator = styled.div<SeparatorProps>`
  margin: ${(props) =>
    props.size === "small" ? "4px" : props.size === "medium" ? "16px" : "32px"};
`;
