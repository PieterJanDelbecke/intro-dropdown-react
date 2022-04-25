import { createGlobalStyle } from "styled-components";

//implementation of Global Styles
const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: 'Epilogue', sans-serif;
    font-size: 18px;
    background-color: hsl(0, 0%, 98%);
}
`

export default GlobalStyles