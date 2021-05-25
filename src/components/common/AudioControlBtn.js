import React from "react";
import PropTypes from "prop-types";

const AudioControlBtn = ({ onBtnClick, icon }) => {
  return (
    <button onClick={onBtnClick}>
      {icon}
    </button>
  );
};

AudioControlBtn.propTypes = {
  onBtnClick: PropTypes.func,
  icon: PropTypes.node.isRequired,
};

AudioControlBtn.defaultProps = {
  onBtnClick: () => {}
};

export default AudioControlBtn;
