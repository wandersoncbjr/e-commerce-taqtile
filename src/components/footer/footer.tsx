import { Copyright } from "./copyright";
import { SectionDownload } from "./section-download";
import { SectionService } from "./section-service";
import { SectionSocialMedia } from "./section-social-media";
import { SectionTextFooter } from "./section-text-footer";
import Logo from "../../assets/img/img-logo.svg";
import {
  ContainerFooterStyled,
  FooterStyled,
  WapperFooterStyled,
} from "./styles";

export function Footer() {
  return (
    <FooterStyled>
      <ContainerFooterStyled>
        <div>
          <img src={Logo} alt={"Logomarca dental Cremer"} />
        </div>
        <WapperFooterStyled>
          <SectionTextFooter
            title="Institucional"
            caption={[
              "Quem somos",
              "App Dental Cremer",
              "Dental Cremer Experience",
              "Dental Cremer Lovers",
              "Política comercial",
              "Política de Privacidade",
            ]}
          />

          <SectionTextFooter
            title="Parceiros"
            caption={["Simples Dental", "iDoc"]}
          />
        </WapperFooterStyled>

        <WapperFooterStyled>
          <SectionTextFooter
            title="Navegue por nossos canais"
            caption={[
              "Estudantes",
              "Universidades",
              "Redes & franquias",
              "Laboratório",
            ]}
          />
          <SectionSocialMedia />
        </WapperFooterStyled>
        <SectionTextFooter
          title="Ajuda"
          caption={[
            "Assistente virtual",
            "Acompanhe seu pedido",
            "2ª via do boleto",
            "Troca e devolução",
            "Perguntas frequentes",
            "Fale conosco",
            "Realize uma cotação",
          ]}
        />
        <WapperFooterStyled>
          <SectionService />
          <SectionDownload />
        </WapperFooterStyled>
      </ContainerFooterStyled>
      <Copyright />
    </FooterStyled>
  );
}
