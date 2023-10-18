import React from "react";
import { Container } from "./styles";
import { TypographyLink } from "../typography/typography-link";
export interface ButtonProps {
  variant: "primary" | "secondary" | "CTA";
  compact?: boolean;
  children: React.ReactNode;
  expanded?: boolean;
  onClick?: () => void;
}

export function Button({ children, expanded, compact, variant, onClick }: ButtonProps) {
  return (
    <Container expanded={expanded} compact={compact} variant={variant} onClick={onClick}>
      <TypographyLink>{children}</TypographyLink>
    </Container>
  );
}
