import { ReactNode } from "react";
import { SeparatorStyle } from "../separator";
import { TypographyButton } from "../typography/typography-link/styles";
import { ContainerLink } from "./styles";
import { IconLinkButton } from "../../assets/icons/icon-link-button";

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
          <IconLinkButton />
          <SeparatorStyle size="small" />
        </>
      )}
      <TypographyButton>{children}</TypographyButton>
    </ContainerLink>
  );
}
