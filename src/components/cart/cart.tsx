import { CardCart, CardCartProps } from "../card-cart/card-cart";
import { Line } from "../line/line";
import { LinkButton } from "../link-button";
import { H1 } from "../typography/headline/h1";
import { ButtonAddCart } from "./button-add/button-add-cart";
import {
  WrapperCartStyled,
  ContainerCartStyled,
  ContainerCartButtonStyled,
  ContainerButtonAddCartStyled,
} from "./style";

interface CartData {
  data: CardCartProps[];
}

export function Cart({ data }: CartData) {
  return (
    <div>
      <H1>Carrinho</H1>
      <ContainerCartStyled>
        <ContainerCartButtonStyled>
          <LinkButton variant="default" expanded>
            Comprar agora (5)
          </LinkButton>
          <LinkButton variant="baseGray" expanded>
            Suas listas
          </LinkButton>
        </ContainerCartButtonStyled>
        <Line />
        <ContainerButtonAddCartStyled>
          <ButtonAddCart />
        </ContainerButtonAddCartStyled>
        <WrapperCartStyled>
          {data.map((item, index) => (
            <CardCart
              Installment={item.Installment}
              caption={item.caption}
              img={item.img}
              price={item.price}
              title={item.title}
              promotion={item.promotion}
              key={index}
            />
          ))}
        </WrapperCartStyled>
      </ContainerCartStyled>
    </div>
  );
}
