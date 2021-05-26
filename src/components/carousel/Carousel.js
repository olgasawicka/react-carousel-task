import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import CarouselStyles from "./CarouselStyles";
import Slide from "./Slide";
import { AppContext } from "../app/App";

const Carousel = ({ slidesData }) => {
  const [currentSlide, setCurrentSlide] = useState(slidesData[1]);
  const { slideWidth } = useContext(AppContext);

  const currSlideIndex = slidesData.findIndex(
    (slide) => slide.id === currentSlide.id
  );

  const onSlideClick = (slideId) => {
    const newIndex = slidesData.findIndex((slide) => slide.id === slideId);
    setCurrentSlide(slidesData[newIndex]);
  };

  return (
    <CarouselStyles maxWidth={slideWidth * 2}>
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(calc(-${
              currSlideIndex * (100 / slidesData.length)
            }% - ${slideWidth / 2}px))`,
          }}
        >
          {slidesData.map((slide, index) => {
            const id = slide.id;
            const isActive = currentSlide.id === id;
            const isNext = index === currSlideIndex + 1;
            const isPrev = index === currSlideIndex - 1;
            let slideStyles = isActive ? "active" : null;
            slideStyles = isPrev ? "prev" : slideStyles;
            slideStyles = isNext ? "next" : slideStyles;
            return (
              <Slide
                key={id}
                slide={slide}
                className={slideStyles}
                onClick={() => onSlideClick(id)}
                isActive={isActive}
                currentSlideId={currentSlide.id}
              />
            );
          })}
        </div>
      </div>
    </CarouselStyles>
  );
};

Carousel.propTypes = {
  slidesData: PropTypes.array.isRequired,
};

export default Carousel;
