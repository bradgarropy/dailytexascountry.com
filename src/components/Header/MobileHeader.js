import React from "react"
import {useContext} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"
import {AppContext} from "../../context/app"
import Menu from "../../svg/menu.svg"

const StyledMobileHeader = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr;
    justify-content: space-between;
    align-content: start;
    align-items: center;
    height: ${({open}) => (open ? "100vh" : "auto")};

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

const StyledMenu = styled(Menu)`
    max-height: 1.5rem;
    width: auto;
    cursor: pointer;
`

const MobileHeader = () => {
    const {open, setOpen} = useContext(AppContext)

    const onClick = () => setOpen(!open)

    return (
        <StyledMobileHeader open={open}>
            <StyledLink to="/">DTXC</StyledLink>
            <StyledMenu onClick={onClick} />
            <Navigation open={open} />
        </StyledMobileHeader>
    )
}

export default MobileHeader
