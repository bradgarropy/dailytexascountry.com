import React from "react"
import {Link} from "gatsby"
import {useContext} from "react"
import styled from "styled-components"
import {AppContext} from "../../context/app"
import {navLink} from "../../styles/partials"

const StyledNavigation = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-evenly;
    justify-items: start;
    color: ${({theme}) => theme.colors.white};

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        gap: 2rem;
    }

    @media (max-width: 40.625rem) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    ${navLink}
`

const StyledA = styled.a`
    ${navLink}
`

const Navigation = () => {
    const {setOpen} = useContext(AppContext)

    const onClick = () => setOpen(false)

    return (
        <StyledNavigation>
            <StyledLink to="/posts" onClick={onClick}>
                POSTS
            </StyledLink>

            <StyledLink to="/episodes" onClick={onClick}>
                EPISODES
            </StyledLink>

            <StyledA href="https://cottonbureau.com/people/daily-texas-country">
                STORE
            </StyledA>

            <StyledLink to="/playlists" onClick={onClick}>
                PLAYLISTS
            </StyledLink>
        </StyledNavigation>
    )
}

export default Navigation
