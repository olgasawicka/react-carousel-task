import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Slide from "../Carousel/Slide";

afterEach(cleanup);

const mockProps = {
  slide: {
    id: 3,
    audio: "./assets/audio/the_secret_garden.mp3",
    image: "./assets/images/the_secret_garden.jpg",
  },
  currentSlideId: 3,
  className: "active",
  isActive: true,
  onClick: jest.fn(),
};

describe("Slide component", () => {
  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, "pause")
    .mockImplementation(() => {});

  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, "play")
    .mockImplementation(() => {});

  it("should render slide with 'active' className", () => {
    const { getByTestId } = render(<Slide {...mockProps} />);
    const slide = getByTestId("slide");

    expect(slide).toHaveClass("active");
  });

  it("should render slide with 'prev' className", () => {
    const upadetedProps = {
      ...mockProps,
      className: "prev",
      isActive: false,
    };

    const { getByTestId } = render(<Slide {...upadetedProps} />);
    const slide = getByTestId("slide");

    expect(slide).toHaveClass("prev");
  });

  it("should render slide with 'next' className", () => {
    const upadetedProps = {
      ...mockProps,
      className: "next",
      isActive: false,
    };

    const { getByTestId } = render(<Slide {...upadetedProps} />);
    const slide = getByTestId("slide");

    expect(slide).toHaveClass("next");
  });

  it("should play the audio and toggle button", () => {
    const { getByTestId } = render(<Slide {...mockProps} />);
    const playBtn = getByTestId("play-btn");

    fireEvent.click(playBtn);

    expect(getByTestId("pause-btn")).toBeInTheDocument();
    expect(playStub).toHaveBeenCalled();
    playStub.mockRestore();

    const pauseBtn = getByTestId("pause-btn");

    fireEvent.click(pauseBtn);
    
    expect(pauseStub).toHaveBeenCalled();
    pauseStub.mockRestore();
    expect(getByTestId("play-btn")).toBeInTheDocument();
  })
});
