import React from "react"
import {Link} from "gatsby"
import DTXC from "svg/dtxc.svg"
import Menu from "svg/menu.svg"
import {useContext} from "react"
import {AppContext} from "context/app"
import styled from "styled-components"
import Navigation from "components/Header/Navigation"
import MobileNavigation from "components/Header/MobileNavigation"

const StyledMobileHeader = styled.header`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: center;
    height: ${({open}) => (open ? "100vh" : "auto")};

    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
        display: none;
    }

    @media (min-width: 40.625rem) {
        height: auto;
    }
`

const TopBar = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-weight: bold;
    justify-self: start;
    margin-bottom: -0.82rem;
`

const StyledDTXC = styled(DTXC)`
    max-width: 8rem;
    height: auto;
`

const StyledMenu = styled(Menu)`
    max-height: 1.5rem;
    width: auto;
    cursor: pointer;

    @media (min-width: 40.625rem) {
        display: none;
    }
`

const MobileHeader = () => {
    const {open, setOpen} = useContext(AppContext)

    const onClick = () => setOpen(false)
    const onMenu = () => setOpen(!open)

    return (
        <StyledMobileHeader open={open}>
            <TopBar>
                <StyledLink aria-label="DTXC" to="/" onClick={onClick}>
                    <StyledDTXC />
                </StyledLink>

                <Navigation />

                <StyledMenu onClick={onMenu} />
            </TopBar>
            <MobileNavigation open={open} />
        </StyledMobileHeader>
    )
}

export default MobileHeader
