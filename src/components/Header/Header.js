import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"

const StyledHeader = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
`

const Header = () => {
    return (
        <StyledHeader>
            <Navigation />
        </StyledHeader>
    )
}

export default Header
