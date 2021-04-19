import Link from "@bradgarropy/gatsby-link"
import PlaylistMeta from "components/PlaylistMeta"
import {getImage} from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "styles/Image"

const StyledPlaylist = styled.article`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    max-width: ${({theme}) => theme.breakpoints.mobile};
    gap: 2rem;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
        gap: 1rem;
    }
`

const PlaylistImage = styled(Image)`
    width: 100%;
    margin: 0 auto;
`

const Playlist = ({playlist}) => {
    const {name} = playlist
    const url = playlist.external_urls.spotify
    const image = getImage(playlist.image)

    return (
        <StyledPlaylist>
            <Link aria-label={name} to={url}>
                <PlaylistImage image={image} />
            </Link>

            <PlaylistMeta playlist={playlist} />
        </StyledPlaylist>
    )
}

Playlist.propTypes = {
    playlist: PropTypes.object.isRequired,
}

export default Playlist
