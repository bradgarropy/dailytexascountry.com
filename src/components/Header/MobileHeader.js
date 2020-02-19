import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"

const StyledMobileHeader = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;

    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: none;
    }
`

const MobileHeader = () => {
    return (
        <StyledMobileHeader>
            <Navigation />
        </StyledMobileHeader>
    )
}

export default MobileHeader
