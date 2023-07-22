import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
}
*,
::after,
::before {
    box-sizing: inherit;
}

body {
    font-family: "nyt-cheltenham", georgia, "times new roman", times, serif;
       width: 100%;
    margin: 0;
    background-color: ${({ theme }) =>
      theme.darkMode ? theme.dark.color.mineShaft : theme.light.color.porcelain};
    color: ${({ theme }) =>
      theme.darkMode ? theme.dark.color.porcelain : theme.light.color.mineShaft};
  }

`;
