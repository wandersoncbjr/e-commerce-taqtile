import { Button } from "../button";
import { Stepper } from "../stepper";
import {
  CardProductsContainerStyled,
  ContainerButtonStyled,
  ContainerImgStyled,
  WrapperButtonStyled,
} from "./styled";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { Price } from "../typography/price/price";
import { Separator } from "../separator";
import { Rating } from "../rate";
import { formatPrice } from "../../price-formatter";
import { H4 } from "../typography/headline/h4/h4";
import { useState } from "react";
import { getCart } from "../../get-cart";

export interface CardProductsProps {
  img: string;
  title: string;
  caption: string;
  price: number;
  Installment: string;
  promotion?: string;
  quantityStars?: number;
}

export function CardProducts({
  img,
  title,
  caption,
  price,
  Installment,
  promotion,
  quantityStars,
}: CardProductsProps) {
  const formattedPrice = formatPrice(price);

  const warnings = () => {
    alert("Site Em Construção");
  };
  const [, setValue] = useState<CardProductsProps[]>([]);
  const handleAddCart = () => {
    const newItem = {
      img,
      title,
      caption,
      price,
      Installment,
      promotion,
    };

    const existingItems = getCart();

    localStorage.setItem(
      "cartItems",
      JSON.stringify([...existingItems, newItem])
    );
    setValue([...existingItems, newItem]);
  };

  return (
    <CardProductsContainerStyled>
      <div onClick={warnings} style={{ cursor: "pointer" }}>
        <ContainerImgStyled>
          <img src={img} alt="Foto do produto" />
        </ContainerImgStyled>
        <H4>{title}</H4>
        <BodySecondary>{caption}</BodySecondary>
      </div>
      <Separator size={"small"} />
      <Rating value={quantityStars} />
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
        <WrapperButtonStyled>
          <Stepper />
        </WrapperButtonStyled>
        <WrapperButtonStyled>
          <Button
            type="button"
            onClick={handleAddCart}
            expanded
            variant={"primary"}
          >
            Adicionar
          </Button>
        </WrapperButtonStyled>
      </ContainerButtonStyled>
    </CardProductsContainerStyled>
  );
}
