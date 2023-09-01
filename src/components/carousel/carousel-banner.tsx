import { ContainerImgBannerStyled } from "../card-products/styled";
import { Carousel } from "./carousel";

const dataImages = [
  "https://seletronic.com.br/wp-content/uploads/2022/11/Amazon-Prime-Banner-IMG.jpg",
  "https://seletronic.com.br/wp-content/uploads/2022/11/Amazon-Prime-Banner-IMG.jpg",
  "https://seletronic.com.br/wp-content/uploads/2022/11/Amazon-Prime-Banner-IMG.jpg",
  "https://seletronic.com.br/wp-content/uploads/2022/11/Amazon-Prime-Banner-IMG.jpg",
];

export function CarouselBanner() {
  return (
    <Carousel type="banner">
      {dataImages.map((item, index) => (
        <ContainerImgBannerStyled key={index}>
          <img src={item}  alt={"Foto do Produto"} />
        </ContainerImgBannerStyled>
      ))}
    </Carousel>
  );
}
