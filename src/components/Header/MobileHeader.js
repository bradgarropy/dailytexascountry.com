import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"

const StyledMobileHeader = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    grid-auto-flow: column;

    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-weight: bold;
    justify-self: start;
`

const MobileHeader = () => {
    return (
        <StyledMobileHeader>
            <StyledLink to="/">DTXC</StyledLink>
            <Navigation />
        </StyledMobileHeader>
    )
}

export default MobileHeader
