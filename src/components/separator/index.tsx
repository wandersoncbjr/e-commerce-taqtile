import * as S from "./styles";
export interface SeparatorProps {
  size: "small" | "medium" | "large";
}

export function Separator({ size }: SeparatorProps) {
  return <S.Separator size={size} />;
}
