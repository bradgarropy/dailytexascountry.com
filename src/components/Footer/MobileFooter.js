import React from "react"
import styled from "styled-components"

const StyledMobileFooter = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;

    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: none;
    }
`

const MobileFooter = () => {
    return <StyledMobileFooter>footer</StyledMobileFooter>
}

export default MobileFooter
