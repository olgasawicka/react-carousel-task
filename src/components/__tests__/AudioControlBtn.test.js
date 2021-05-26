import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AudioControlBtn from "../common/AudioControlBtn";
import { PlayBtn, PauseBtn } from "../../assets/ButtonIcons";

afterEach(cleanup);

describe("AudioControlBtn component", () => {
  const mockProps = {
    onBtnClick: jest.fn(),
    icon: PlayBtn,
    isDisabled: false,
    dataTestId: "play-btn",
  };

  it("should render 'play' button", () => {
    const { getByTestId } = render(<AudioControlBtn {...mockProps} />);
    fireEvent.click(getByTestId("play-btn"));

    expect(getByTestId("play-btn")).toBeInTheDocument();
    expect(getByTestId("play-btn")).not.toBeDisabled();
    expect(mockProps.onBtnClick).toHaveBeenCalled();
  });

  it("should render disabled 'play' button", () => {
    const updatedProps = {
      ...mockProps,
      isDisabled: true,
    };
    const { getByTestId } = render(<AudioControlBtn {...updatedProps} />);
    fireEvent.click(getByTestId("play-btn"));

    expect(getByTestId("play-btn")).toBeInTheDocument();
    expect(getByTestId("play-btn")).toBeDisabled();
  });

  it("should render 'pause' button", () => {
    const updatedProps = {
      ...mockProps,
      icon: PauseBtn,
      dataTestId: "pause-btn",
    };
    const { getByTestId } = render(<AudioControlBtn {...updatedProps} />);
    fireEvent.click(getByTestId("pause-btn"));

    expect(getByTestId("pause-btn")).toBeInTheDocument();
    expect(getByTestId("pause-btn")).not.toBeDisabled();
    expect(mockProps.onBtnClick).toHaveBeenCalled();
  });
});
