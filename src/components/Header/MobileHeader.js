import React from "react"
import {useContext} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import DTXC from "../../svg/dtxc.svg"
import Menu from "../../svg/menu.svg"
import Navigation from "./Navigation"
import {AppContext} from "../../context/app"

const StyledMobileHeader = styled.header`
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

    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-weight: bold;
    justify-self: start;
`

const StyledDTXC = styled(DTXC)`
    max-width: 10rem;
    height: auto;
`

const StyledMenu = styled(Menu)`
    max-height: 1.5rem;
    width: auto;
    cursor: pointer;
`

const MobileHeader = () => {
    const {open, setOpen} = useContext(AppContext)

    const onClick = () => setOpen(false)
    const onMenu = () => setOpen(!open)

    return (
        <StyledMobileHeader open={open}>
            <StyledLink to="/" onClick={onClick}>
                <StyledDTXC />
            </StyledLink>

            <StyledMenu onClick={onMenu} />
            <Navigation open={open} />
        </StyledMobileHeader>
    )
}

export default MobileHeader
