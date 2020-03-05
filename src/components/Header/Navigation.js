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

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-auto-flow: row;
        gap: 2rem;
    }
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-weight: bold;
`

const Navigation = ({open = true}) => {
    const {setOpen} = useContext(AppContext)

    const onClick = () => setOpen(false)

    return (
        <StyledNavigation open={open}>
            <StyledLink to="/blog" onClick={onClick}>
                blog
            </StyledLink>

            <StyledLink to="/episodes" onClick={onClick}>
                episodes
            </StyledLink>

            <StyledLink to="/store" onClick={onClick}>
                store
            </StyledLink>

            <StyledLink to="/playlists" onClick={onClick}>
                playlists
            </StyledLink>
        </StyledNavigation>
    )
}

Navigation.propTypes = {
    open: PropTypes.bool,
}

export default Navigation
