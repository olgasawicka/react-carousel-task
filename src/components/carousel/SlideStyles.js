import styled from "styled-components";

const SlideStyles = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  width: 300px;
  height: auto;
  cursor: pointer;

  & .border {
    position: relative;
    z-index: 2;
  }

  & .content-wrapper {
    position: absolute;
    top: 2rem;
    bottom: 2rem;
    left: 0.5rem;
    right: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-image: url("./assets/images/slide_bg.jpg");
    background-size: cover;

    & .thumb-wrapper {
      display: flex;
      padding: 1rem 2rem 0;
      align-self: center;
      width: fit-content;
      height: fit-content
    }

    & .btn-wrapper {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
    z-index: 5;
      & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        cursor: pointer;
        border: 1px solid transparent;
        outline: 1px solid transparent;
        background-color: transparent;
        &[disabled] {
          cursor: initial;
        }
      }
    }
  }
`;

export default SlideStyles;
