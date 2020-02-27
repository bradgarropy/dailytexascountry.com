import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"

const StyledHeader = styled.header`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    row-gap: 2rem;
`

const StyledLink = styled(Link)`
    justify-self: center;
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
    font-size: 4rem;
    font-weight: bold;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledLink to="/">DTXC</StyledLink>
            <Navigation />
        </StyledHeader>
    )
}

export default Header
