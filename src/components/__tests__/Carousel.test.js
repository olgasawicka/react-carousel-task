import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import mockData from "../../data/data";
import Carousel from "../carousel/Carousel";

afterEach(cleanup);

describe("Carousel component", () => {
  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, "pause")
    .mockImplementation(() => {});

  it("should take a snapshot", () => {
    const { container } = render(<Carousel slidesData={mockData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render slider wrapper with 5 slides", () => {
    const { getByTestId, getAllByTestId } = render(
      <Carousel slidesData={mockData} />
    );
    const sliderWrapper = getByTestId("slider-wrapper");
    const slides = getAllByTestId("slide");

    expect(sliderWrapper).toBeInTheDocument();
    expect(slides).toHaveLength(6);
  });

  it("should change active slide", () => {
    const { getAllByTestId } = render(<Carousel slidesData={mockData} />);
    const slides = getAllByTestId("slide");
    fireEvent.click(slides[4]);
    expect(slides[4]).toHaveClass("active");
    expect(slides[5]).toHaveClass("next");
    expect(slides[3]).toHaveClass("prev");
  });
});
