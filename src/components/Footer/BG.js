import React from "react"
import Logo from "svg/bg.svg"
import styled from "styled-components"

const StyledBG = styled.a`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-weight: bold;
    justify-self: end;

    svg {
        max-height: 1.5rem;
        width: auto;
    }
`

const BG = () => {
    return (
        <StyledBG
            aria-label="bg"
            href="https://bradgarropy.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Logo />
        </StyledBG>
    )
}

export default BG
