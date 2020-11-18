import {Link} from "gatsby"
import {useApp} from "hooks"
import styled from "styled-components"
import {navLink} from "styles/partials"

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

const Navigation = () => {
    const appCtx = useApp()

    const onClick = () => appCtx.setOpen(false)

    return (
        <StyledNavigation>
            <StyledLink to="/posts" onClick={onClick}>
                POSTS
            </StyledLink>

            <StyledLink to="/episodes" onClick={onClick}>
                EPISODES
            </StyledLink>

            <StyledLink href="/store" onClick={onClick}>
                STORE
            </StyledLink>

            <StyledLink to="/playlists" onClick={onClick}>
                PLAYLISTS
            </StyledLink>
        </StyledNavigation>
    )
}

export default Navigation
