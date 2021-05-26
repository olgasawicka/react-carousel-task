import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
  --cloud: #e0e0e0;
  --sky: #1bbfd0;
  --sunset: #f57c00;
}
html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, a, img, i,ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, footer, header,nav, section {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
html {
  box-sizing: border-box;
  font-size:100%;
}
*, *:before, *:after{
  box-sizing: inherit;
}
body{
  padding: 0;
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
      display: inline-block;
      width: 100%;
      height: auto;
    }
ol, ul {
	list-style: none;
}
`;

const AppStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: var(--sunset);
`;

export default AppStyles;
