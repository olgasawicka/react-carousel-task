import React from "react";
import PropTypes from "prop-types";
import SlideStyles from "./SlideStyles";

const Slide = ({ slide }) => {
  return (
    <SlideStyles key={slide.id}>
      <img src={slide.image} alt="Slide" />
    </SlideStyles>
  );
};

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default Slide;
