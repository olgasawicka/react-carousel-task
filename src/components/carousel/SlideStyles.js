import styled from "styled-components";

const SlideStyles = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid red;

  & button {
    position: absolute;
    width: 200px;
    padding: 1rem;
    bottom: 1rem;
    background-color: lime;
    cursor: pointer;
  }
`;

export default SlideStyles;
