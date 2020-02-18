import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
`

const Footer = () => {
    return <StyledFooter>footer</StyledFooter>
}

export default Footer
