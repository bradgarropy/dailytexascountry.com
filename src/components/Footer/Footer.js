import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import BG from "./BG"
import Social from "./Social"
import Copywrite from "./Copywrite"

const StyledFooter = styled.footer`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    row-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    justify-items: center;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    align-self: end;
    align-items: center;
`

const StyledLink = styled(Link)`
    justify-self: start;
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-family: "Patua One", sans-serif;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledLink to="/about">ABOUT</StyledLink>
            <Social />
            <BG />

            <Copywrite company="Daily Texas Country" />
        </StyledFooter>
    )
}

export default Footer
