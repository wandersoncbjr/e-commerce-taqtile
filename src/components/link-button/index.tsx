import { ReactNode } from "react";
import { TypographyButton } from "../typography/typography-link/styles";
import { ContainerLink } from "./styles";

export interface LinkButtonProps {
  children: ReactNode;
  variant: "destructive" | "default";
  expanded?: boolean;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

export function LinkButton({
  children,
  icon,
  variant,
  expanded,
  iconPosition,
}: LinkButtonProps) {
  return (
    <ContainerLink variant={variant} expanded={expanded}>
      {iconPosition === "left" && <span>{icon}</span>}
      <TypographyButton>{children}</TypographyButton>
      {iconPosition === "right" && <span>{icon}</span>}
    </ContainerLink>
  );
}
