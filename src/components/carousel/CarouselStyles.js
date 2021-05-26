import styled from "styled-components";

const CarouselStyles = styled.div`
  position: relative;
  flex: 1;
  & .slider {
    position: relative;
    display: flex;
    align-items: center;
    max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "600px")};
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;

    & .slider-wrapper {
      display: flex;
      position: absolute;
      left: 50%;
      transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }
`;

export default CarouselStyles;
