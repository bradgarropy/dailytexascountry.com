import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Playlist from "components/Playlists/Playlist"

const StyledPlaylists = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 5rem;
    justify-content: center;
`

const Playlists = ({playlists}) => {
    return (
        <StyledPlaylists>
            {playlists.map((playlist, index) => (
                <Playlist key={index} playlist={playlist} />
            ))}
        </StyledPlaylists>
    )
}

Playlists.propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Playlists
