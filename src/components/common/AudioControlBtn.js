import React from "react";
import PropTypes from "prop-types";

const AudioControlBtn = ({ onBtnClick, icon, isDisabled }) => {
  return (
    <button onClick={onBtnClick} disabled={isDisabled}>
      {icon}
    </button>
  );
};

AudioControlBtn.propTypes = {
  onBtnClick: PropTypes.func,
  icon: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
};

AudioControlBtn.defaultProps = {
  onBtnClick: () => {},
  isDisabled: false,
};

export default AudioControlBtn;
