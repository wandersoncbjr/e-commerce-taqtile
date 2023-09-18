import { H3 } from "../typography/headline/h3/h3";
import { H4 } from "../typography/headline/h4/h4";
import { SectionTextFooterStyled } from "./styles";

interface SectionTextFooterProps {
  title: string;
  caption: string[];
}

export function SectionTextFooter({ title, caption }: SectionTextFooterProps) {
  return (
    <SectionTextFooterStyled>
      <H3>{title}</H3>
      {caption.map((item, index) => (
        <li key={index}>
          <a>
            <H4 color="baseGray">{item}</H4>
          </a>
        </li>
      ))}
    </SectionTextFooterStyled>
  );
}
