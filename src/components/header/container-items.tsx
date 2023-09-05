import { ReactNode } from "react";
import { ContainerItemStyled } from "./styles";
import { TypographyButton } from "../typography/typography-link/styles";

interface ContainerItemsProps {
  icon: ReactNode;
  title: string;
}
export function ContainerItems({ icon, title }: ContainerItemsProps) {
  return (
    <ContainerItemStyled>
      {icon}
      <TypographyButton>{title}</TypographyButton>
    </ContainerItemStyled>
  );
}
