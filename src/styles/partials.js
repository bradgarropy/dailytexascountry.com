import {css} from "styled-components"

const navLink = css`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-size: 1.1rem;
    font-family: "Patua One", sans-serif;
    width: 100%;
    cursor: pointer;
`

export {navLink}
