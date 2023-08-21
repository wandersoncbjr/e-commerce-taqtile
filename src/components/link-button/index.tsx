import { ReactNode } from "react";
import { SeparatorStyle } from "../separator";
import iconLink from "./icon-link-button.svg";
import { TypographyButton } from "../typography/typography-link/styles";
import { ContainerLink } from "./styles";

export interface LinkButtonProps {
  children: ReactNode;
  variant: "destructive" | "default";
  expanded?: boolean;
  icon?: boolean;
  onClick?: () => void;
}

export function LinkButton({
  children,
  icon,
  variant,
  expanded,
}: LinkButtonProps) {
  return (
    <ContainerLink variant={variant} expanded={expanded}>
      {icon && (
        <>
          <span>
            <img src={iconLink} alt="ícone com sinal de mai" />
          </span>
          <SeparatorStyle size="small" />
        </>
      )}
      <TypographyButton>{children}</TypographyButton>
    </ContainerLink>
  );
}
