import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"
import DTXC from "../../svg/dtxc.svg"

const StyledHeader = styled.header`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    row-gap: 2rem;
`

const StyledLink = styled(Link)`
    justify-self: center;
    display: grid;
`

const StyledDTXC = styled(DTXC)`
    max-width: 10rem;
    height: auto;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledLink to="/">
                <StyledDTXC />
            </StyledLink>
            <Navigation />
        </StyledHeader>
    )
}

export default Header
