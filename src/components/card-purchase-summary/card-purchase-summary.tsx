import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { ContainerCards } from "../container-cards/container-cards";
import { LinkButton } from "../link-button";
import { Separator } from "../separator";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { H2 } from "../typography/headline/h2";
import { Price } from "../typography/price/price";
import {
  ContainerButtonCardPurchaseStyled,
  ContainerTextCardPurchaseStyled,
  WappperTextCardPurchaseStyled,
} from "./styles";

interface CardPurchaseSummaryProps {
  subtotal: string;
  discounts: string;
  shipping: string;
  total: string;
}

export function CardPurchaseSummary({
  subtotal,
  discounts,
  shipping,
  total,
}: CardPurchaseSummaryProps) {
  const navigate = useNavigate();

  return (
    <ContainerCards>
      <H2>Resumo da compra</H2>
      <Separator size="medium" />
      <WappperTextCardPurchaseStyled>
        <ContainerTextCardPurchaseStyled>
          <BodySecondary color="baseGray">Subtotal</BodySecondary>
          <Price>{subtotal}</Price>
        </ContainerTextCardPurchaseStyled>
        <ContainerTextCardPurchaseStyled>
          <BodySecondary color="baseGray">Descontos</BodySecondary>
          <Price>{discounts}</Price>
        </ContainerTextCardPurchaseStyled>
        <ContainerTextCardPurchaseStyled>
          <BodySecondary color="baseGray">Frete</BodySecondary>
          <BodySecondary color="baseGrayXDark">{shipping}</BodySecondary>
        </ContainerTextCardPurchaseStyled>
        <ContainerTextCardPurchaseStyled>
          <BodySecondary color="baseGray">Total</BodySecondary>
          <Price>{total}</Price>
        </ContainerTextCardPurchaseStyled>
      </WappperTextCardPurchaseStyled>
      <ContainerButtonCardPurchaseStyled>
        <Button expanded variant="CTA">
          Fechar pedido
        </Button>
        <LinkButton variant="default" expanded onClick={() => navigate("/")}>
          Continuar comprando
        </LinkButton>
      </ContainerButtonCardPurchaseStyled>
    </ContainerCards>
  );
}
