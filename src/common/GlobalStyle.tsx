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
}

`;
