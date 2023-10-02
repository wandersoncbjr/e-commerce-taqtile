import { CarouselBanner } from "../../components/carousel/carousel-banner";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { SectionBannerCard } from "../../components/section-banner-card/section-banner-card";
import { SectionCardInformation } from "../../components/section-card-news/section-card-news";
import { SectionCardsProducts } from "../../components/section-cards/section-card";
import { Separator } from "../../components/separator";
import { data } from "../../data";
import { ContainerHomeStyled } from "./styles";

export function Home() {
  return (
    <div>
      <Header />
      <Separator size="medium" />
      <CarouselBanner imagesBanner={data.imagesBanner}></CarouselBanner>
      <ContainerHomeStyled>
        <SectionBannerCard bannerData={data.banners} />
        <SectionCardsProducts
          data={data.produtos}
          caption="Jóias"
          title="Ver mais produtos"
        />
        <SectionCardsProducts
          data={data.produtos}
          caption="Roupas"
          title="Ver mais produtos"
        />
        <SectionCardsProducts
          data={data.produtos}
          caption="Ofertas"
          title="Acessar todas as ofertas"
        />
      </ContainerHomeStyled>
      <CarouselBanner imagesBanner={data.imagesBanner}></CarouselBanner>
      <ContainerHomeStyled>
        <SectionCardInformation informartion={data.information} />
      </ContainerHomeStyled>
      <Separator size="medium" />
      <Footer />
    </div>
  );
}
