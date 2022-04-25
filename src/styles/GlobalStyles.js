import { createGlobalStyle } from "styled-components";

//implementation of Global Styles
const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: 'Epilogue', sans-serif;
    font-size: 18px;
}
`

export default GlobalStyles