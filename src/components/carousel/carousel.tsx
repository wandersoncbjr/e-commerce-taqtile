import CarouselSlider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { ContainerCarousel } from "./styles";
import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  type: "banner" | "card";
}

export function Carousel({ children, type }: CarouselProps) {
  const responsive = {
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: type === "card" ? 1.3 : 1,
    },
  };

  return (
    <ContainerCarousel>
      <CarouselSlider
        additionalTransfrom={0}
        arrows={false}
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
        showDots
        slidesToSlide={1}
        swipeable
      >
        {children}
      </CarouselSlider>
    </ContainerCarousel>
  );
}
