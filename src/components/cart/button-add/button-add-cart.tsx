import { IconAdding } from "../../../assets/icons/icon-adding";
import { IconArrowLow } from "../../../assets/icons/icon-arrow-low";
import { FormsInputValue } from "../../typography/forms-input-value/forms-input-value";
import { ButtonAddCartStyled, ContainerButtonAddCart } from "./styles";

export function ButtonAddCart() {
  return (
    <ButtonAddCartStyled>
      <ContainerButtonAddCart>
        <IconAdding color="baseGrayLight" />
        <FormsInputValue>Adicionar carrinho à lista</FormsInputValue>
      </ContainerButtonAddCart>
      <IconArrowLow />
    </ButtonAddCartStyled>
  );
}
