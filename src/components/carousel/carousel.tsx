import CarouselSlider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { ContainerCarousel, ContainerItemCarousel } from "./styles";
import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode[];
  type: "banner" | "card";
  showDots?: boolean | undefined;
}

export function Carousel({ children, type, showDots }: CarouselProps) {
  const responsive = {
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: type === "card" ? 1.5 : 1,
    },
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
  };

  return (
    <ContainerCarousel>
      <CarouselSlider
        additionalTransfrom={0}
        arrows={false}
        infinite
        autoPlaySpeed={3000}
        draggable
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={showDots}
        slidesToSlide={1}
        swipeable
      >
        {children.map((items, index) => (
          <ContainerItemCarousel key={index}>{items}</ContainerItemCarousel>
        ))}
      </CarouselSlider>
    </ContainerCarousel>
  );
}
