import {Link} from "gatsby"
import {useContext} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {AppContext} from "context/app"
import {navLink} from "styles/partials"

const StyledMobileNavigation = styled.div`
    display: ${({open}) => (open ? "grid" : "none")};
    gap: 2rem;
    justify-content: center;

    @media (min-width: 40.625rem) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    ${navLink}

    @media (max-width: 40.625rem) {
        padding: 1rem 2rem;
        font-size: 1.5rem;
    }
`

const MobileNavigation = ({open = true}) => {
    const {setOpen} = useContext(AppContext)

    const onClick = () => setOpen(false)

    return (
        <StyledMobileNavigation open={open}>
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
        </StyledMobileNavigation>
    )
}

MobileNavigation.propTypes = {
    open: PropTypes.bool,
}

export default MobileNavigation
