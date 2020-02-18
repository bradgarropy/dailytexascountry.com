import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
`

const Header = () => {
    return <StyledHeader>header</StyledHeader>
}

export default Header
