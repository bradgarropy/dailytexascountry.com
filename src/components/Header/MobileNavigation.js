import React from "react"
import {Link} from "gatsby"
import {useContext} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {AppContext} from "../../context/app"

const StyledMobileNavigation = styled.div`
    display: ${({open}) => (open ? "grid" : "none")};
    gap: 2rem;

    @media (min-width: 650px) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.1rem;
    font-family: "Patua One";
    width: 100%;

    @media (max-width: 650px) {
        padding: 1rem 2rem;
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
