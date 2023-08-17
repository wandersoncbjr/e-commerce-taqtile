import React from "react";
import * as S from "./styles";
import iconLink from "./icon-link-button.svg";
import { Separator } from "../separator";

export interface ButtonProps {
  variant: "primary" | "secondary" | "CTA" | "link";
  compact?: boolean;
  icon?: boolean;
  children: React.ReactNode;
  expanded?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  expanded,
  compact,
  variant,
  icon,
}: ButtonProps) {
  return (
    <S.Container
      expanded={expanded}
      compact={compact}
      variant={variant}
      icon={icon}
    >
      {icon && (
        <>
          <span>
            <img src={iconLink} alt="ícone com sinal de mais." />
          </span>
          <Separator size="small" />
        </>
      )}
      {children}
    </S.Container>
  );
}
