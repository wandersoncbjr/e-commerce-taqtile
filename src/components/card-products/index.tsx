import { Button } from "../button";
import { Stepper } from "../stepper";
import { ContainerStyled, ContainerButtonStyled } from "./styled";
import imageProducts from "./Image-products.svg";
import { Desktop } from "../typography/desktop/desktop";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { Price } from "../typography/price/price";
import { Separator } from "../separator";

interface CardProductsProps {
  img?: string;
  title: string;
  caption: string;
  price: number;
  Installment: string;
}

export function CardProducts() {
  return (
    <>
      <ContainerStyled>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={imageProducts} alt="Foto do produto" />
        </div>
        <Separator size="medium" />
        <Desktop>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
        </Desktop>
        <Separator size="small" />
        <BodySecondary>
          Lorem ipsum dolor sit amet, consectetur...
        </BodySecondary>
        <Separator size="large" />
        <Price>R$ 99,90 ️</Price>
        <Separator size="small" />
        <BodySecondary>12x de R$ 9,90 </BodySecondary>
        <ContainerButtonStyled>
          <div style={{ width: "50%" }}>
            <Button expanded variant={"primary"}>
              Adicionar
            </Button>
          </div>
          <Stepper />
        </ContainerButtonStyled>
      </ContainerStyled>
    </>
  );
}
