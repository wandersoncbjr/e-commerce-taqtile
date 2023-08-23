import { Button } from "../button";
import { Stepper } from "../stepper";
import {
  ContainerStyled,
  ContainerButtonStyled,
  ContainerImgStyled,
  WrapperButtonStyled,
} from "./styled";
import imageProducts from "./Image-products.svg";
import { Desktop } from "../typography/desktop/desktop";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { Price } from "../typography/price/price";
import { Separator } from "../separator";
import { Rating } from "../rate";
import { formatPrice } from "../../price-formatter";

interface CardProductsProps {
  img: string;
  title: string;
  caption: string;
  price: number;
  Installment: string;
  promotion?: string;
}

export function CardProducts({
  title,
  caption,
  price,
  Installment,
  promotion,
}: CardProductsProps) {
  const formattedPrice = formatPrice(price);

  const warnings = () => {
    alert("Site Em Construção");
  };

  return (
    <>
      <ContainerStyled>
        <div onClick={warnings} style={{ cursor: "pointer" }}>
          <ContainerImgStyled>
            <img src={imageProducts} alt="Foto do produto" />
          </ContainerImgStyled>
          <Desktop>{title}</Desktop>
          <BodySecondary>{caption}</BodySecondary>
        </div>
        <Separator size={"small"} />
        <Rating />
        {promotion ? (
          <BodySecondary style={{ marginTop: "5px" }} scratched>
            {promotion}
          </BodySecondary>
        ) : (
          <Separator size={"medium"} />
        )}
        <Price>{formattedPrice} ️</Price>
        <BodySecondary>{Installment} </BodySecondary>
        <Separator size={"small"} />
        <ContainerButtonStyled>
          <Stepper />
          <WrapperButtonStyled>
            <Button expanded variant={"primary"}>
              Adicionar
            </Button>
          </WrapperButtonStyled>
        </ContainerButtonStyled>
      </ContainerStyled>
    </>
  );
}
