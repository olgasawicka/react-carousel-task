import { cleanup, render } from "@testing-library/react";
import React from "react";
import mockData from "../../data/data";
import App from "../app/App";
import Carousel from "../carousel/Carousel";
import Spinner from "../common/Spinner";

afterEach(cleanup);

describe("App Component", () => {

  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, "pause")
    .mockImplementation(() => {});

  it("should take a snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders Spinner component", () => {
    const { getByTestId } = render(<Spinner />);
    expect(getByTestId("spinner")).toBeInTheDocument();
  });

  it("renders Carousel component", () => {
    const { getByTestId } = render(<Carousel slidesData={mockData} />);
    expect(getByTestId("carousel")).toBeInTheDocument();

    expect(pauseStub).toHaveBeenCalled();
    pauseStub.mockRestore();
  });
});
