import { ButtonHTMLAttributes, ReactNode } from "react";
import { TypographyButton } from "../typography/typography-link/styles";
import { ContainerLink } from "./styles";

export interface LinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "destructive" | "default" | "baseGray" ;
  expanded?: boolean;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
}

export function LinkButton({
  children,
  icon,
  variant,
  expanded,
  iconPosition,
  ...res
}: LinkButtonProps) {
  return (
    <ContainerLink {...res} variant={variant} expanded={expanded}>
      {iconPosition === "left" && <span>{icon}</span>}
      <TypographyButton>{children}</TypographyButton>
      {iconPosition === "right" && <span>{icon}</span>}
    </ContainerLink>
  );
}
