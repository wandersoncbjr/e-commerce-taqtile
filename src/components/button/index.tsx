import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { TypographyLink } from "../typography/typography-link";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "CTA";
  compact?: boolean;
  children: React.ReactNode;
  expanded?: boolean;
}

export function Button({
  children,
  expanded,
  compact,
  variant,
  ...rest
}: ButtonProps) {
  return (
    <Container
      {...rest}
      expanded={expanded}
      compact={compact}
      variant={variant}
    >
      <TypographyLink>{children}</TypographyLink>
    </Container>
  );
}
