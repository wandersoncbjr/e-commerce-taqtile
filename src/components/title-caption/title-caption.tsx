import { IconArrow } from "../../assets/icons/icon-arrow";
import { LinkButton } from "../link-button";
import { H2 } from "../typography/headline/h2";
import { CaptionTitleStyled } from "./styles";

interface TitleCaptionProps {
  caption: string | undefined;
  title: string | undefined;
}
export function TitleCaption({ caption, title }: TitleCaptionProps) {
  return (
    <CaptionTitleStyled>
      <H2>{caption}</H2>
      <LinkButton iconPosition="right" icon={<IconArrow />} variant="default">
        {title}
      </LinkButton>
    </CaptionTitleStyled>
  );
}
