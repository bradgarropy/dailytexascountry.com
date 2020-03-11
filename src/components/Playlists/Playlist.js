import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../../styles/Image"

const StyledPlaylist = styled.article`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    max-width: 50rem;
    gap: 2rem;
    align-items: center;
    justify-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
        gap: 1.5rem;
        text-align: center;
    }
`

const PlaylistName = styled.a`
    text-decoration: none;

    h2 {
        font-size: 2rem;
        display: inline;
    }
`

const PlaylistDescription = styled.p`
    max-width: 30rem;
    line-height: 1.5;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        margin-top: 0.5rem;
    }
`

const PlaylistImage = styled(Image)`
    width: 300px;
`

const Playlist = ({playlist}) => {
    const {name, description} = playlist
    const url = playlist.external_urls.spotify
    const image = playlist.image.localFile.childImageSharp.fluid

    return (
        <StyledPlaylist>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <PlaylistImage fluid={image} />
            </a>

            <div>
                <PlaylistName
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>{name}</h2>
                </PlaylistName>

                <PlaylistDescription>{description}</PlaylistDescription>
            </div>
        </StyledPlaylist>
    )
}

Playlist.propTypes = {
    playlist: PropTypes.object.isRequired,
}

export default Playlist
