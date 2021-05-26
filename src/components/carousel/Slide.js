import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import SlideStyles from "./SlideStyles";
import AudioControlBtn from "../common/AudioControlBtn";
import { PlayBtn, PauseBtn } from "../../assets/ButtonIcons";
import slideBorder from "../../assets/mockup_blank_dark.png";
import slideBg from "../../assets/slide_bg.jpg";
import { AppContext } from "../app/App";

const Slide = ({ slide, currentSlideId, className, isActive, onClick }) => {
  const [audio] = useState(new Audio(slide.audio));
  const [isPlaying, setIsPlaying] = useState(false);
  const slideRef = useRef(null);

  const { slideWidth, setSlideWidth } = useContext(AppContext);

  useEffect(() => {
    audio.currentTime = 0;
  }, [currentSlideId]);

  useEffect(() => {
    slideRef && slideRef.current && setSlideWidth(slideRef.current.offsetWidth);
  }, [slideWidth]);

  useEffect(() => {
    currentSlideId === slide.id && isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, currentSlideId]);

  const handlePlayerClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const handleClick = () => {
    isPlaying && setIsPlaying(false);
    onClick();
  };

  return (
    <>
      <SlideStyles ref={slideRef} className={className} onClick={handleClick}>
        <img src={slideBorder} alt="Slide border" className="slide-border" />
        <div className="slide-bg">
          <img src={slideBg} alt="Slide background" />
        </div>
        <div className="thumb-wrapper">
          <img src={slide.image} alt="Book Cover" />
        </div>
        <div className="btn-wrapper">
          <AudioControlBtn
            onBtnClick={handlePlayerClick}
            icon={isPlaying ? PauseBtn : PlayBtn}
            isDisabled={!isActive && !isPlaying ? true : null}
          />
        </div>
      </SlideStyles>
    </>
  );
};

const { string, object, func, bool } = PropTypes;

Slide.propTypes = {
  slide: object.isRequired,
  currentSlideId: string.isRequired,
  className: string.isRequired,
  isActive: bool.isRequired,
  onClick: func,
};

Slide.defaultProps = {
  onClick: () => {},
};

export default Slide;
