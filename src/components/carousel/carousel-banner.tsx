import useWindowWidth from "../../useWindowSize";
import { ContainerImgBannerStyled } from "../card-products/styled";
import { Carousel } from "./carousel";

interface CarouselBannerProps {
  imagesBanner: string[];
}

export function CarouselBanner({ imagesBanner }: CarouselBannerProps) {
  const windowSize = useWindowWidth();

  return (
    <div>
      {windowSize >= 769 ? (
        <>
          <ContainerImgBannerStyled>
            <img src={imagesBanner[0]} alt={"Foto do Produto"} />
          </ContainerImgBannerStyled>
        </>
      ) : (
        <Carousel type="banner">
          {imagesBanner.map((item, index) => (
            <ContainerImgBannerStyled key={index}>
              <img src={item} alt={"Foto do Produto"} />
            </ContainerImgBannerStyled>
          ))}
        </Carousel>
      )}
    </div>
  );
}
