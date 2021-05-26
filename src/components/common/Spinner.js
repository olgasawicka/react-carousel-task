import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Spinner = () => (
  <div data-testid="spinner">
    <GridLoader color={"var(--sky)"} />
  </div>
);

export default Spinner;
