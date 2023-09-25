import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { H3 } from "../typography/headline/h3/h3";
import { H4 } from "../typography/headline/h4/h4";
import { ContainerSectionServiceStyled, SectionServiceStyled } from "./styles";

export function SectionService() {
  return (
    <SectionServiceStyled>
      <ContainerSectionServiceStyled>
        <H3>Atendimento</H3>
        <H4 color="brandCtaDark"> 0800 727 7565</H4>
        <BodySecondary>
          Seg. a Sex. das 8h às 20h Sáb. das 9h às 13h
        </BodySecondary>
      </ContainerSectionServiceStyled>
    </SectionServiceStyled>
  );
}
