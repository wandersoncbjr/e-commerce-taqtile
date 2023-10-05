import { CardProducts } from "../card-products";
import {
  ContainerCardsProductsStyled,
  SectionCardWrapperStyled,
} from "./styles";
import { Carousel } from "../carousel/carousel";

import useWindowWidth from "../../useWindowSize";
import { TitleCaption } from "../title-caption/title-caption";

export interface SectionCardsProductsProps {
  title?: string;
  caption?: string;
  data: {
    Installment: string;
    caption: string;
    img: string;
    price: number;
    title: string;
    promotion?: string;
    quantityStars: number;
  }[];
}

export function SectionCardsProducts({
  data,
  title,
  caption,
}: SectionCardsProductsProps) {
  const cardsToRender = data.slice(0, 6);
  const windowSize = useWindowWidth();

  return (
    <ContainerCardsProductsStyled>
      <TitleCaption title={title} caption={caption} />
      {windowSize >= 769 ? (
        <SectionCardWrapperStyled>
          {cardsToRender?.map((item, index) => (
            <CardProducts
              quantityStars={item.quantityStars}
              key={index}
              Installment={item.Installment}
              caption={item.caption}
              img={item.img}
              price={item.price}
              title={item.title}
              promotion={item.promotion}
            />
          ))}
        </SectionCardWrapperStyled>
      ) : (
        <Carousel showDots type="card">
          {cardsToRender?.map((item, index) => (
            <CardProducts
              quantityStars={item.quantityStars}
              key={index}
              Installment={item.Installment}
              caption={item.caption}
              img={item.img}
              price={item.price}
              title={item.title}
              promotion={item.promotion}
            />
          ))}
        </Carousel>
      )}
    </ContainerCardsProductsStyled>
  );
}
