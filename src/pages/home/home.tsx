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
      <Separator size="large" />
      <ContainerHomeStyled>
        <Separator size="large" />
        <SectionBannerCard bannerData={data.banners} />
        <CarouselBanner imagesBanner={data.imagesBanner}></CarouselBanner>
        <SectionCardsProducts
          data={data.produtos}
          caption="Jóias"
          title="Ver mais produtos"
          icon
        />
        <SectionCardsProducts
          data={data.produtos}
          caption="Roupas"
          title="Ver mais produtos"
          icon
        />
        <SectionCardsProducts
          data={data.produtos}
          caption="Ofertas"
          title="Acessar todas as ofertas"
          icon
        />
        <CarouselBanner imagesBanner={data.imagesBanner}></CarouselBanner>
      </ContainerHomeStyled>
      <ContainerHomeStyled>
        <SectionCardInformation informartion={data.information} />
      </ContainerHomeStyled>
      <Separator size="medium" />
      <Footer />
    </div>
  );
}
