import React from "react"
import {Link} from "gatsby"
import {useContext} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {AppContext} from "../../context/app"

const StyledNavigation = styled.div`
    display: ${({open}) => (open ? "grid" : "none")};
    grid-auto-flow: column;
    justify-content: space-evenly;
    justify-items: start;
    color: ${({theme}) => theme.colors.white};

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-auto-flow: row;
    }
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.1rem;
    font-family: "Patua One";
    width: 100%;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        padding: 1rem 2rem;
    }
`

const Navigation = ({open = true}) => {
    const {setOpen} = useContext(AppContext)

    const onClick = () => setOpen(false)

    return (
        <StyledNavigation open={open}>
            <StyledLink to="/posts" onClick={onClick}>
                POSTS
            </StyledLink>

            <StyledLink to="/episodes" onClick={onClick}>
                EPISODES
            </StyledLink>

            <StyledLink to="/store" onClick={onClick}>
                STORE
            </StyledLink>

            <StyledLink to="/playlists" onClick={onClick}>
                PLAYLISTS
            </StyledLink>
        </StyledNavigation>
    )
}

Navigation.propTypes = {
    open: PropTypes.bool,
}

export default Navigation
