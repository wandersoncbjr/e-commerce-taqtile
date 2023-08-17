import { ReactNode } from "react";
import { Separator } from "../separator";
import iconLink from "./icon-link-button.svg";
import { TypographyButton } from "../typography/typography-link/styles";
import * as S from "./styles";

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
    <S.ContainerLink variant={variant} expanded={expanded}>
      {icon && (
        <>
          <span>
            <img src={iconLink} alt="ícone com sinal de mais." />
          </span>
          <Separator size="small" />
        </>
      )}
      <TypographyButton>{children}</TypographyButton>
    </S.ContainerLink>
  );
}
