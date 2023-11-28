import { CardDelivery } from "../../components/card-delivery/card-delivery";
import { CardDiscount } from "../../components/card-discount/card-discount";
import { CardPurchaseSummary } from "../../components/card-purchase-summary/card-purchase-summary";
import { Cart } from "../../components/cart/cart";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { SectionCardsProducts } from "../../components/section-cards/section-card";
import { data } from "../../data";
import {
  ContainerSectionItemsCartStyled,
  ContainerPageCart,
  WrapperCartStyled,
  WrapperCartPageStyled,
  ContainerRightCartStyled,
} from "./styles";

export function CartPage() {
  return (
    <div>
      <Header />
      <ContainerPageCart>
        <ContainerSectionItemsCartStyled>
          <WrapperCartPageStyled>
            <WrapperCartStyled>
              <Cart data={data.produtos} />
            </WrapperCartStyled>
            <ContainerRightCartStyled>
              <CardDelivery />
              <CardDiscount />
              <CardPurchaseSummary
                discounts="- R$ 100,00"
                shipping="Gratuito"
                subtotal="R$ 1500"
                total="R$ 1400"
              />
            </ContainerRightCartStyled>
          </WrapperCartPageStyled>
          <SectionCardsProducts
            data={data.produtos}
            caption="Aproveite e leve também"
          />
        </ContainerSectionItemsCartStyled>
      </ContainerPageCart>
      <Footer />
    </div>
  );
}
