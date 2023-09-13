import { BoxColorStyled, ContainerBannerCardStyled } from "./styles";

export interface BannerCardProps {
  img: string;
  color: string;
}
export function BannerCard({ color, img }: BannerCardProps) {
  return (
    <ContainerBannerCardStyled>
      <img src={img} alt="Foto do produto" />
      <BoxColorStyled color={color} />
    </ContainerBannerCardStyled>
  );
}
