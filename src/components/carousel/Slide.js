import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SlideStyles from "./SlideStyles";
import AudioControlBtn from "../common/AudioControlBtn";
import { PlayBtn, PauseBtn } from "../../assets/ButtonIcons";
import slideBorder from "../../assets/mockup_blank_dark.png";
import slideBg from "../../assets/slide_bg.jpg";

const Slide = ({ slide }) => {
  const [audio] = useState(new Audio(slide.audio));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  const togglePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <SlideStyles>
      <img src={slideBorder} alt="Slide Border" className="border" />
      <div className="content-wrapper">
        <div className="thumb-wrapper">
          <img src={slide.image} alt="Book Cover" />
        </div>
        <div className="btn-wrapper">
          <AudioControlBtn
            onBtnClick={togglePlay}
            icon={isPlaying ? PauseBtn : PlayBtn}
          />
        </div>
      </div>
    </SlideStyles>
  );
};

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default Slide;
