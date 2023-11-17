import { Line } from "../line/line";
import { LinkButton } from "../link-button";
import { Separator } from "../separator";
import { Stepper } from "../stepper";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { H4 } from "../typography/headline/h4/h4";
import { Price } from "../typography/price/price";
import {
  ContainerCardCartStyled,
  WrapperCartButtonStyled,
  WrapperCartStepperStyled,
  WrapperTextImgCartStyled,
  WrapperTextStepperStyled,
  WrapperTextStyled,
} from "./styles";
import { CardProductsProps } from "../card-products";

type CardCartProps = Pick<
  CardProductsProps,
  "title" | "img" | "price" | "caption" | "Installment" | "promotion"
>;
export function CardCart({
  title,
  img,
  price,
  caption,
  Installment,
  promotion,
}: CardCartProps) {
  return (
    <ContainerCardCartStyled>
      <WrapperTextStepperStyled>
        <WrapperTextImgCartStyled>
          <img src={img} alt="Foto do produto" />
          <div>
            <H4 color="baseGrayDark">{title}</H4>
            <BodySecondary>{caption}</BodySecondary>
            <WrapperTextStyled>
              <BodySecondary scratched>{promotion}</BodySecondary>
              <Price>{price}</Price>
              <BodySecondary>{Installment}</BodySecondary>
            </WrapperTextStyled>
          </div>
        </WrapperTextImgCartStyled>
        <WrapperCartStepperStyled>
          <Stepper />
        </WrapperCartStepperStyled>
      </WrapperTextStepperStyled>
      <Separator size="medium" />
      <Line />
      <Separator size="medium" />
      <WrapperCartButtonStyled>
        <LinkButton expanded variant="destructive">
          Remover
        </LinkButton>
        <LinkButton expanded variant="default">
          Mover para lista
        </LinkButton>
      </WrapperCartButtonStyled>
    </ContainerCardCartStyled>
  );
}
