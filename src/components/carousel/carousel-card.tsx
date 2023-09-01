import { CardProducts } from "../card-products";
import { Carousel } from "./carousel";
import { ContainerItemCarousel } from "./styles";

const cardData = [
  {
    img: "https://images.ctfassets.net/ynyrv8292f9c/51gnkitJKORiIfnytscvsV/621f848bc3fe08cf7a049366eaace9b4/file.png",
    title: "Smartphone XYZ",
    caption: "Um smartphone avançado com desempenho incrível.",
    price: 699.0,
    Installment: "Em até 12x",
    promotion: "Desconto de 15%",
  },
  {
    img: "https://images.ctfassets.net/ynyrv8292f9c/51gnkitJKORiIfnytscvsV/621f848bc3fe08cf7a049366eaace9b4/file.png",
    title: "Notebook ABC",
    caption: "Um notebook poderoso para produtividade e entretenimento.",
    price: 899.0,
    Installment: "Em até 10x",
    promotion: "Desconto de 10%",
  },
  {
    img: "https://images.ctfassets.net/ynyrv8292f9c/51gnkitJKORiIfnytscvsV/621f848bc3fe08cf7a049366eaace9b4/file.png",
    title: "Fones de Ouvido XYZ",
    caption: "Fones de ouvido com cancelamento de ruído e som cristalino.",
    price: 129.0,
    Installment: "Em até 6x",
    promotion: "Desconto de 20%",
  },
];

export function CarouselCard() {
  return (
    <>
      <Carousel type="card">
        {cardData.map((items, index) => (
          <ContainerItemCarousel key={index}>
            <CardProducts
              Installment={items.Installment}
              caption={items.caption}
              img={items.img}
              price={items.price}
              title={items.title}
              promotion={items.promotion}
            />
          </ContainerItemCarousel>
        ))}
      </Carousel>
    </>
  );
}
