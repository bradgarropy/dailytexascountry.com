import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import BG from "./BG"
import Social from "./Social"

const StyledFooter = styled.footer`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    align-self: end;
    align-items: center;
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-family: "Patua One";
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledLink to="/about">ABOUT</StyledLink>
            <Social />
            <BG />
        </StyledFooter>
    )
}

export default Footer
