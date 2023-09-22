import { IconBlog } from "../../assets/icons/icon-blog";
import { IconFacebook } from "../../assets/icons/icon-facebook";
import { IconGoogleBusiness } from "../../assets/icons/icon-google-business";
import { IconInstagram } from "../../assets/icons/icon-instagram";
import { IconLinkedin } from "../../assets/icons/icon-linkedin";
import { IconPinterest } from "../../assets/icons/icon-pinterest";
import { IconSpotify } from "../../assets/icons/icon-spotify";
import { IconTiktok } from "../../assets/icons/icon-tiktok";
import { IconTwitter } from "../../assets/icons/icon-twitter";
import { IconYoutube } from "../../assets/icons/icon-youtube";
import { H3 } from "../typography/headline/h3/h3";
import {
  ContainerSectionSocialMediaStyled,
  SectionSocialMediaStyled,
} from "./styles";

export function SectionSocialMedia() {
  return (
    <SectionSocialMediaStyled>
      <H3>Nossas redes</H3>
      <div>
        <ContainerSectionSocialMediaStyled>
          <IconBlog />
          <IconInstagram />
          <IconFacebook />
          <IconTiktok />
          <IconPinterest />
        </ContainerSectionSocialMediaStyled>
        <ContainerSectionSocialMediaStyled>
          <IconYoutube />
          <IconSpotify />
          <IconTwitter />
          <IconLinkedin />
          <IconGoogleBusiness />
        </ContainerSectionSocialMediaStyled>
      </div>
    </SectionSocialMediaStyled>
  );
}
