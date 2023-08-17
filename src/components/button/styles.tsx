import styled from "styled-components";
import { constants } from "../../typography";
import { ButtonProps } from ".";
import { colors } from "../../typography/colors";

const constantsButton = {
  defaultCompactHeight: "32px",
  defaultHeight: "40px",
};

const colorVariants = {
  primary: {
    background: colors.brandPrimary,
    text: colors.baseWhite,
  },
  secondary: {
    background: colors.brandSecondary,
    text: colors.brandPrimary,
  },
  CTA: {
    background: colors.brandCta,
    text: colors.brandPrimary,
  },
  link: {
    background: colors.baseWhite,
    text: colors.brandCtaDark,
  },
};

export const Container = styled.button<ButtonProps>`
  width: ${(props) => (props.expanded ? "100%" : "")};
  height: ${(props) =>
    props.compact
      ? constantsButton.defaultCompactHeight
      : constantsButton.defaultHeight};
  background-color: ${(props) =>
    colorVariants[props.variant]?.background || ""};
  color: ${(props) => colorVariants[props.variant]?.text || ""};
  font-family: ${constants.font.primary};
  font-weight: ${constants.weight.semiBold};
  border-radius: ${constants.radius.smallRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;
