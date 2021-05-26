import styled from "styled-components";

const SlideStyles = styled.div`
  position: relative;
  flex: 1;
  width: 300px;
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  z-index: 0;
  opacity: 0;
  border-radius: 42px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  transform: scale(0.8);
  cursor: pointer;
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
  }

  &.active {
    opacity: 1;
    z-index: 1;
    transform: scale(1);
    cursor: initial;
  }
  &.prev {
    opacity: 1;
    transform: scale(0.8) translateX(50%);
  }
  &.next {
    opacity: 1;
    transform: scale(0.8) translateX(-50%);
  }

  & .slide-border {
    display: block;
    position: relative;
    z-index: 2;
  }
  & .slide-bg {
    display: block;
    position: absolute;
    top: 32px;
    left: 14px;
    right: 14px;
    background-color: black;
    z-index: 0;
  }

  & .thumb-wrapper {
    position: absolute;
    display: block;
    top: 120px;
    left: 28px;
    right: 28px;
    z-index: 1;
  }

  & .btn-wrapper {
    position: absolute;
    display: inline-block;
    width: fit-content;
    height: auto;
    left: 0;
    right: 0;
    bottom: 40px;
    margin: auto;
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
`;

export default SlideStyles;
