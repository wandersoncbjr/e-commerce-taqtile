import { ReactNode } from "react";
import {TypographyButton} from "./styles";

interface ButtonsLinksProps {
  children: ReactNode;
}

export function TypographyLink({ children }: ButtonsLinksProps) {
  return <TypographyButton>{children}</TypographyButton>;
}
