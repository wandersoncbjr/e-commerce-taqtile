import { H4 } from "../typography/headline/h4/h4";
import {
  BoxColorStyled,
  ContainerBannerCardStyled,
  ContainerTextCardStyled,
} from "./styles";

export interface BannerCardProps {
  img: string;
  color: string;
  title: string;
}
export function BannerCard({ color, img, title }: BannerCardProps) {
  return (
    <ContainerTextCardStyled>
      <ContainerBannerCardStyled>
        <img src={img} alt="Foto do produto" />
        <BoxColorStyled color={color} />
      </ContainerBannerCardStyled>
      <H4>{title}</H4>
    </ContainerTextCardStyled>
  );
}
