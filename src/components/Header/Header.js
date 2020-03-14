import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"
import DTXC19 from "../../svg/dtxc19.svg"
// import DTXC20 from "../../svg/dtxc20.svg"
// import DTXC21 from "../../svg/dtxc21.svg"

const StyledHeader = styled.header`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    row-gap: 2rem;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: start;
`

const StyledLink = styled(Link)`
    justify-self: center;
    display: grid;
`

const StyledDTXC = styled(DTXC19)`
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
