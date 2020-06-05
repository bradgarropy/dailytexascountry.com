import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    h1, h2, h3, h4, h5, h6 {
        font-family: "Patua One", sans-serif;
        font-weight: normal;
    }

    h1 {
        font-size: 2rem;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;

        :hover {
            text-decoration: underline;
        }
    }

    *::selection {
        background: ${({theme}) => theme.colors.redSelection};
        color: ${({theme}) => theme.colors.white};
    }

    img::selection {
        background: ${({theme}) => theme.colors.redSelectionImage};
    }

    /* twitter */
    twitter-widget {
        margin: 2rem auto !important;
        width: 100% !important;
    }

    /* instagram */
    .instagram-media {
        margin: 2rem auto !important;
        min-width: unset !important;
    }

    /* facebook and youtube videos */
    .video {
        overflow: hidden;
        position: relative;
        width: 100%;
        margin: 2rem auto;

        ::after {
            padding-top: 56.25%;
            display: block;
            content: "";
        }

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
`

export default GlobalStyles
