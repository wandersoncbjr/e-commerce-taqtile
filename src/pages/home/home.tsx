import { CarouselBanner } from "../../components/carousel/carousel-banner";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { SectionBannerCard } from "../../components/section-banner-card/section-banner-card";
import { SectionCardInformation } from "../../components/section-card-news/section-card-news";
import { SectionCardsProducts } from "../../components/section-cards/section-card";
import { ContainerHomeStyled } from "./styles";

const data = {
  produtos: [
    {
      Installment: "12x sem juros",
      caption: "Oferta Especial",
      img: "https://dw0jruhdg6fis.cloudfront.net/producao/29924272/G/cdcr_033___creme_colgate_30g_mpa.jpg",
      price: 15480,
      title: "Vitamina D - 60",
      promotion: "De R$ 154,80 por",
    },
    {
      Installment: "6x sem juros",
      caption: "Frete Grátis",
      img: "https://dw0jruhdg6fis.cloudfront.net/producao/29924272/G/cdcr_033___creme_colgate_30g_mpa.jpg",
      price: 2990,
      title: "Antena para TV Digital ",
      promotion: "De R$ 39,90 por",
    },
    {
      Installment: "3x sem juros",
      caption: "Economize 10%",
      img: "https://dw0jruhdg6fis.cloudfront.net/producao/29924272/G/cdcr_033___creme_colgate_30g_mpa.jpg",
      price: 8990,
      title: "Jogo de Cama Casal",
      promotion: "De R$ 99,90 por",
    },
    {
      Installment: "10x sem juros",
      caption: "Entrega Rápida",
      img: "https://dw0jruhdg6fis.cloudfront.net/producao/29924272/G/cdcr_033___creme_colgate_30g_mpa.jpg",
      price: 5990,
      title: "Fone de Ouvido ",
      promotion: "De R$ 69,90 por",
    },
    {
      Installment: "4x sem juros",
      caption: "Desconto Especial",
      img: "https://dw0jruhdg6fis.cloudfront.net/producao/29924272/G/cdcr_033___creme_colgate_30g_mpa.jpg",
      price: 16990,
      title: "Câmera Digital",
      promotion: "De R$ 199,90 por",
    },
  ],
  banners: [
    {
      color: "accessoryPurple",
      img: "https://i.im.ge/2023/10/02/NbKpQf.Image.png",
      title: "Catálogo de Ofertas",
    },
    {
      color: "accessoryNavy",
      img: "https://i.im.ge/2023/10/02/NbKpQf.Image.png",
      title: "Materiais de uso frequente",
    },
    {
      color: "brandSecondaryDark",
      img: "https://i.im.ge/2023/10/02/NbKpQf.Image.png",
      title: "Equipamentos",
    },
    {
      color: "accessoryGreenPool",
      img: "https://i.im.ge/2023/10/02/NbKpQf.Image.png",
      title: "Biossegurança e EPIs",
    },
    {
      color: "accessoryBlue",
      img: "https://i.im.ge/2023/10/02/NbKpQf.Image.png",
      title: "Harmonização Orofacial",
    },
    {
      color: "brandCtaLight",
      img: "https://i.im.ge/2023/10/02/NbKpQf.Image.png",
      title: "Moda",
    },
  ],
  imagesBanner: [
    "https://i.im.ge/2023/10/02/NbJ6SM.photo-1-4.png",
    "https://i.im.ge/2023/10/02/NbJ6SM.photo-1-4.png",
    "https://i.im.ge/2023/10/02/NbJ6SM.photo-1-4.png",
    "https://i.im.ge/2023/10/02/NbJ6SM.photo-1-4.png",
    "https://i.im.ge/2023/10/02/NbJ6SM.photo-1-4.png",
  ],

  information: [
    {
      caption:
        "Facetas diretas em resina composta para melhora da aparência estética",
      date: "2023-10-02",
      img: "https://i.im.ge/2023/10/02/N8ZA3f.Image.png",
      title: "Casos clínicos",
    },
    {
      caption:
        "Facetas diretas em resina composta para melhora da aparência estética",
      date: "2023-09-30",
      img: "https://i.im.ge/2023/10/02/N8ZA3f.Image.png",
      title: "Casos clínicos",
    },
    {
      caption:
        "Facetas diretas em resina composta para melhora da aparência estética",
      date: "2023-09-28",
      img: "https://i.im.ge/2023/10/02/N8ZA3f.Image.png",
      title: "Casos clínicos",
    },
    {
      caption:
        "Facetas diretas em resina composta para melhora da aparência estética",
      date: "2023-09-25",
      img: "https://i.im.ge/2023/10/02/N8ZA3f.Image.png",
      title: "Casos clínicos",
    },
  ],
};

export function Home() {
  return (
    <div>
      <Header />
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

      <Footer />
    </div>
  );
}
