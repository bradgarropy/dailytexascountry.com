import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    h1, h2, h3, h4, h5, h6 {
        font-family: "Patua One";
        font-weight: normal;
    }

    a {
        text-decoration: none;
        color: inherit;

        :hover {
            text-decoration: underline;
        }
    }
`

export default GlobalStyles
