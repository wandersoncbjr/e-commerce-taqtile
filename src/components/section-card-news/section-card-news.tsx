import useWindowWidth from "../../useWindowSize";
import { Carousel } from "../carousel/carousel";
import { InformationCard } from "../information-card/information-card";
import { TitleCaption } from "../title-caption/title-caption";
import { SectionCardInformationStyled } from "./styles";

interface SectionCardInformationData {
  informartion: {
    caption: string;
    date: string;
    img: string;
    title: string;
  }[];
}

export function SectionCardInformation({
  informartion,
}: SectionCardInformationData) {
  const windowSize = useWindowWidth();

  return (
    <div>
      <TitleCaption caption="Acessar blog" title="Últimas notícias do blog" />
      {windowSize >= 769 ? (
        <SectionCardInformationStyled>
          {informartion.map((item, index) => (
            <InformationCard
              key={index}
              caption={item.caption}
              date={item.date}
              img={item.img}
              title={item.title}
            />
          ))}
        </SectionCardInformationStyled>
      ) : (
        <Carousel type="card">
          {informartion.map((item, index) => (
            <InformationCard
              key={index}
              caption={item.caption}
              date={item.date}
              img={item.img}
              title={item.title}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
}
