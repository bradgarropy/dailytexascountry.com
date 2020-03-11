import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Title from "../../styles/Title"

const StyledPlaylistMeta = styled.div`
    display: grid;
    gap: 1rem;
    justify-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
        gap: 0.25rem;
    }
`

const PlaylistName = styled.a`
    justify-self: start;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        justify-self: auto;
    }
`

const PlaylistDescription = styled.p`
    max-width: 30rem;
    line-height: 1.5;
    margin: 0;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        margin-top: 0.5rem;
    }
`

const PlaylistMeta = ({playlist}) => {
    const {name, description} = playlist
    const url = playlist.external_urls.spotify

    return (
        <StyledPlaylistMeta>
            <PlaylistName href={url} target="_blank" rel="noopener noreferrer">
                <Title>{name}</Title>
            </PlaylistName>

            <PlaylistDescription>{description}</PlaylistDescription>
        </StyledPlaylistMeta>
    )
}

PlaylistMeta.propTypes = {
    playlist: PropTypes.object.isRequired,
}

export default PlaylistMeta
