import { ReactNode } from "react";
import {LabelStyle} from "./styles";

export interface LabelProps {
  children: ReactNode;
  error?: boolean;
}

export function Label({ children, error }: LabelProps) {
  return <LabelStyle error={error}>{children}</LabelStyle>;
}
