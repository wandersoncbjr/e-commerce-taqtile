import { BannerImg, ContainerBannerImgStyled } from "./styles";

interface BannerProps {
  image: string;
}

export function Banner({ image }: BannerProps) {
  return (
    <ContainerBannerImgStyled>
      <BannerImg src={image} />
    </ContainerBannerImgStyled>
  );
}
