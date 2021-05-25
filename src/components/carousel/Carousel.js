import React from "react";
import PropTypes from "prop-types";
import CarouselStyles from "./CarouselStyles";
import Slide from "./Slide";

const Carousel = ({ slidesData }) => {
  return (
    <CarouselStyles>
      {slidesData.map((slide) => (
        <Slide key={slide.id} slide={slide} />
      ))}
    </CarouselStyles>
  );
};

Carousel.propTypes = {
  slidesData: PropTypes.array.isRequired,
};

export default Carousel;
