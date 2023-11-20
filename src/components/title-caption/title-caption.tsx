import { IconArrow } from "../../assets/icons/icon-arrow";
import { LinkButton } from "../link-button";
import { H2 } from "../typography/headline/h2";
import { CaptionTitleStyled } from "./styles";

interface TitleCaptionProps {
  caption?: string;
  title?: string;
  icon?: boolean;
}
export function TitleCaption({ caption, title, icon }: TitleCaptionProps) {
  return (
    <CaptionTitleStyled>
      <H2>{caption}</H2>
      <LinkButton
        iconPosition="right"
        icon={icon ? <IconArrow /> : undefined}
        variant="default"
      >
        {title}
      </LinkButton>
    </CaptionTitleStyled>
  );
}
