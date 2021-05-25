import React, { useEffect, useState } from "react";
import data from "../../data/data";
import Carousel from "../carousel/Carousel";
import AppStyles, { GlobalStyles } from "./AppStyles";
import Spinner from "../common/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [slidesData, setSlidesData] = useState(null);

  useEffect(() => {
    setSlidesData(data);
  }, []);

  useEffect(() => {
    slidesData && setLoading(false);
  }, [slidesData]);

  return (
    <>
      <GlobalStyles />
      <AppStyles>
        {loading && !slidesData ? (
          <Spinner />
        ) : (
          <Carousel slidesData={slidesData} />
        )}
      </AppStyles>
    </>
  );
};

export default App;
