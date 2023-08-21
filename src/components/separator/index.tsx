import { SeparatorStyle } from "./styles";
export interface SeparatorProps {
  size: "small" | "medium" | "large";
}

export function Separator({ size }: SeparatorProps) {
  return <SeparatorStyle size={size} />;
}
export { SeparatorStyle };

