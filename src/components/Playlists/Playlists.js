import React from "react"
import PropType from "prop-types"
import styled from "styled-components"
import Playlist from "./Playlist"

const StyledPlaylists = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 3rem;
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
    playlists: PropType.arrayOf(PropType.object).isRequired,
}

export default Playlists
