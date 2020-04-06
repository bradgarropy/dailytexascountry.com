import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Social from "./Social"
import BG from "../../svg/bg.svg"

const StyledFooter = styled.footer`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-family: "Patua One";
`

const StyledA = styled.a`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
`

const StyledBG = styled(BG)`
    max-height: 1.5rem;
    width: auto;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledLink to="/about">ABOUT</StyledLink>
            <Social />

            <StyledA
                href="https://bradgarropy.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledBG />
            </StyledA>
        </StyledFooter>
    )
}

export default Footer
