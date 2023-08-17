import React from "react";
import * as S from "./styles";
import { TypographyLink } from "../typography/typography-link";
export interface ButtonProps {
  variant: "primary" | "secondary" | "CTA";
  compact?: boolean;
  children: React.ReactNode;
  expanded?: boolean;
  onClick?: () => void;
}

export function Button({ children, expanded, compact, variant }: ButtonProps) {
  return (
    <S.Container expanded={expanded} compact={compact} variant={variant}>
      <TypographyLink>{children}</TypographyLink>
    </S.Container>
  );
}
