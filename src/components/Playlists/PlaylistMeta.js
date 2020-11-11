import React from "react"
import Title from "styles/Title"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledPlaylistMeta = styled.div`
    display: grid;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        justify-items: center;
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
        gap: 0.25rem;
    }
`

const PlaylistLink = styled.a`
    justify-self: start;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        justify-self: auto;
    }
`

const PlaylistName = styled(Title)`
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        text-align: center;
    }
`

const PlaylistDescription = styled.p`
    max-width: 30rem;
    line-height: 1.5;
    margin: 1rem 0 0 0;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        margin-top: 0.5rem;
    }
`

const PlaylistMeta = ({playlist}) => {
    const {name, description} = playlist
    const url = playlist.external_urls.spotify

    return (
        <StyledPlaylistMeta>
            <PlaylistLink href={url} target="_blank" rel="noopener noreferrer">
                <PlaylistName>{name}</PlaylistName>
            </PlaylistLink>

            <PlaylistDescription>{description}</PlaylistDescription>
        </StyledPlaylistMeta>
    )
}

PlaylistMeta.propTypes = {
    playlist: PropTypes.object.isRequired,
}

export default PlaylistMeta
