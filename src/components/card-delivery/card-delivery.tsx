import { IconWarning } from "../../assets/icons/icon-warning";
import { InputButtonCard } from "../input-button-card/input-button-card";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { BodySuccess } from "../typography/body-success/body-success";
import { WappperIconTitle } from "./styles";

export function CardDelivery() {
  return (
    <InputButtonCard
      titleButton="Calcular"
      placeholder="00000-000"
      label="Digite o CEP"
      title="Estimativa de entrega"
    >
      <div>
        <WappperIconTitle>
          <IconWarning />
          <BodySuccess>Frete gratuito</BodySuccess>
        </WappperIconTitle>
        <BodySecondary weight="semiBold">
          Chegará em até 15 dias úteis.
        </BodySecondary>
        <div>
          <BodySecondary>
            Prazo válido a partir da emissão de nota fiscal.
          </BodySecondary>
        </div>
      </div>
    </InputButtonCard>
  );
}
