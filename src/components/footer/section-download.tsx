import { H3 } from "../typography/headline/h3/h3";
import stampEbit from "../../assets/img/stamp-ebit-procon.svg";
import imgAppStore from "../../assets/img/img-app-store.svg";
import imgAppPlayStore from "../../assets/img/img-google-play.svg";
import CardFlags from "../../assets/img/card-flags.svg";
import {
  ContainerSectionDownloadStyled,
  WapperImagesStoreStylde,
} from "./styles";

export function SectionDownload() {
  return (
    <ContainerSectionDownloadStyled>
      <WapperImagesStoreStylde>
        <img src={CardFlags} alt="Bandeiras do cartão." />
      </WapperImagesStoreStylde>
      <H3>Baixe nosso app</H3>
      <WapperImagesStoreStylde>
        <img src={imgAppStore} alt="Baixar na App store" />
        <img src={imgAppPlayStore} alt="Baixar na Play store" />
      </WapperImagesStoreStylde>
      <WapperImagesStoreStylde>
        <img src={stampEbit} alt="Selo Ebit Ouro e selo Procon." />
      </WapperImagesStoreStylde>
    </ContainerSectionDownloadStyled>
  );
}
