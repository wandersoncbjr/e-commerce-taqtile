import { IconClose } from "../../assets/icons/icon-close";
import { Button } from "../button";
import { ContainerCards } from "../container-cards/container-cards";
import { ContainerWarning } from "../container-warning/container-warning";
import { Input } from "../inputs/Input";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { H2 } from "../typography/headline/h2";
import { ContainerCardList, WrapperIconAndTitleCardList } from "./styles";

export function CardList() {
  return (
    <ContainerCards>
      <ContainerCardList>
        <WrapperIconAndTitleCardList>
          <H2>Criar nova lista</H2>
          <IconClose />
        </WrapperIconAndTitleCardList>
        <Input label="Nome da lista" />
        <ContainerWarning>
          <BodySecondary color="statesWarningDark">
            Os produtos do carrinho serão automaticamente adicionados à lista.
          </BodySecondary>
        </ContainerWarning>
        <Button variant="primary">Criar lista</Button>
      </ContainerCardList>
    </ContainerCards>
  );
}
