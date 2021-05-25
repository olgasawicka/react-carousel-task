import React, { useState } from "react";
import PropTypes from "prop-types";
import SlideStyles from "./SlideStyles";

const Slide = ({ slide }) => {
  const [audio] = useState(new Audio(slide.audio));
  const [btnState, setBtnState] = useState("Play");

  const handleAudio = () => {
    if (btnState === "Play") {
      setBtnState("Pause");
      audio.play();
    } else {
      setBtnState("Play");
      audio.pause();
    }
  };

  return (
    <SlideStyles>
      <img src={slide.image} alt="Slide" />
      <button onClick={handleAudio}>{btnState}</button>
    </SlideStyles>
  );
};

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default Slide;
