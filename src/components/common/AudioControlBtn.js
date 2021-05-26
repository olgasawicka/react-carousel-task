import React from "react";
import PropTypes from "prop-types";

const AudioControlBtn = ({ onBtnClick, icon, isDisabled, dataTestId }) => {
  return (
    <button onClick={onBtnClick} disabled={isDisabled} data-testid={dataTestId}>
      {icon}
    </button>
  );
};

const { func, node, bool, string } = PropTypes;

AudioControlBtn.propTypes = {
  onBtnClick: func,
  icon: node.isRequired,
  isDisabled: bool,
  dataTestId: string.isRequired,
};

AudioControlBtn.defaultProps = {
  onBtnClick: () => {},
  isDisabled: false,
};

export default AudioControlBtn;
