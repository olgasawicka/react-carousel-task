import React, { createContext, useEffect, useState } from "react";
import data from "../../data/data";
import Carousel from "../carousel/Carousel";
import AppStyles, { GlobalStyles } from "./AppStyles";
import Spinner from "../common/Spinner";

export const AppContext = createContext({
  slideWidth: 0,
  setSlideWidth: () => {},
});

const App = () => {
  const [loading, setLoading] = useState(true);
  const [slidesData, setSlidesData] = useState(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    setSlidesData(data);
  }, []);

  useEffect(() => {
    slidesData && setLoading(false);
  }, [slidesData]);

  return (
    <>
      <GlobalStyles />
      <AppContext.Provider
        value={{
          slideWidth,
          setSlideWidth,
        }}
      >
        <AppStyles>
          {loading && !slidesData ? (
            <Spinner />
          ) : (
            <Carousel slidesData={slidesData} />
          )}
        </AppStyles>
      </AppContext.Provider>
    </>
  );
};

export default App;
