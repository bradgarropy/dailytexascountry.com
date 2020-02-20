import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    color: ${({theme}) => theme.colors.white};
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-weight: bold;
`

const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledLink to="/blog">blog</StyledLink>
            <StyledLink to="/episodes">episodes</StyledLink>
            <StyledLink to="/store">store</StyledLink>
            <StyledLink to="/playlists">playlists</StyledLink>
        </StyledNavigation>
    )
}

export default Navigation
