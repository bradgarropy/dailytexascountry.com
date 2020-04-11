import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../../styles/Image"
import PlaylistMeta from "./PlaylistMeta"

const StyledPlaylist = styled.article`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    max-width: ${({theme}) => theme.breakpoints.mobile};
    gap: 2rem;
    align-items: center;
    justify-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
        gap: 1rem;
    }
`

const PlaylistLink = styled.a`
    position: relative;
`

const PlaylistCount = styled.span`
    position: absolute;
    line-height: 1rem;
    top: -1.25rem;
    left: -1.25rem;
    background: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.white};
    border: 0.25rem solid ${({theme}) => theme.colors.white};
    z-index: 1;
    border-radius: 10rem;
    padding: 0.4rem 0.6rem;
    font-weight: 700;
`

const PlaylistImage = styled(Image)`
    width: 300px;
`

const Playlist = ({playlist}) => {
    const count = playlist.tracks.total
    const url = playlist.external_urls.spotify
    const image = playlist.image.childImageSharp.fluid

    return (
        <StyledPlaylist>
            <PlaylistLink href={url} target="_blank" rel="noopener noreferrer">
                <PlaylistCount>{count}</PlaylistCount>
                <PlaylistImage fluid={image} />
            </PlaylistLink>

            <PlaylistMeta playlist={playlist} />
        </StyledPlaylist>
    )
}

Playlist.propTypes = {
    playlist: PropTypes.object.isRequired,
}

export default Playlist
