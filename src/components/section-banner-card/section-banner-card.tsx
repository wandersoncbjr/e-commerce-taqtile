import useWindowWidth from "../../useWindowSize";
import { BannerCard } from "../banner-card/banner-card";
import { Carousel } from "../carousel/carousel";
import { WrapperBannerCardStyled } from "./styles";

interface SectionBannerCardProps {
  bannerData: {
    color: string;
    img: string;
    title: string;
  }[];
}
export function SectionBannerCard({ bannerData }: SectionBannerCardProps) {
  const windowSize = useWindowWidth();

  return (
    <div>
      {windowSize >= 769 ? (
        <WrapperBannerCardStyled>
          {bannerData.map((item, index) => (
            <BannerCard
              key={index}
              color={item.color}
              img={item.img}
              title={item.title}
            />
          ))}
        </WrapperBannerCardStyled>
      ) : (
        <Carousel type="card">
          {bannerData.map((item, index) => (
            <BannerCard
              key={index}
              color={item.color}
              img={item.img}
              title={item.title}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
}
