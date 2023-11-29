import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { H4 } from "../typography/headline/h4/h4";

import {
  ContainerCardInformationStyles,
  WapperTextCardInformationStyles,
} from "./styles";

interface InformationCardProps {
  title: string;
  caption: string;
  date: string;
  img: string;
}

export function InformationCard({
  title,
  caption,
  date,
  img,
}: InformationCardProps) {
  return (
    <ContainerCardInformationStyles>
      <img src={img} alt="foto do card de informção" />
      <WapperTextCardInformationStyles>
        <BodySecondary color="brandCtaDark">{title}</BodySecondary>
        <H4>{caption}</H4>
        <BodySecondary>{date}</BodySecondary>
      </WapperTextCardInformationStyles>
    </ContainerCardInformationStyles>
  );
}
