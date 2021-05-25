import React, { useEffect, useState } from "react";
import data from "../../data/data";
import Carousel from "../carousel/Carousel";
import AppStyles, { GlobalStyles } from "./AppStyles";

const App = () => {
  const [slidesData, setSlidesData] = useState(null);

  useEffect(() => {
    setSlidesData(data);
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <Carousel slidesData={slidesData} />
      </AppStyles>
    </>
  );
};

export default App;
