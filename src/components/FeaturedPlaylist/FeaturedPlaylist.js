import {getImage} from "gatsby-plugin-image"
import Link from "@bradgarropy/gatsby-link"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "styles/Image"

const StyledFeaturedPlaylist = styled.article`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-template-columns: none;
        grid-template-rows: repeat(2, auto);
    }
`

const PlaylistInfo = styled.div`
    display: grid;
    justify-items: start;
    align-content: center;
    gap: 1rem;

    span {
        font-size: 1.1rem;
        line-height: 1.5;
    }
`

const PlaylistImage = styled(Image)`
    width: 100%;
`

const FeaturedPlaylist = ({playlist}) => {
    const {name, description} = playlist
    const url = playlist.external_urls.spotify
    const image = getImage(playlist.image)

    return (
        <StyledFeaturedPlaylist>
            <Link aria-label={name} to={url}>
                <PlaylistImage image={image} />
            </Link>

            <PlaylistInfo>
                <Link to={url}>
                    <h1>{name}</h1>
                </Link>

                <span>{description}</span>
            </PlaylistInfo>
        </StyledFeaturedPlaylist>
    )
}

FeaturedPlaylist.propTypes = {
    playlist: PropTypes.object.isRequired,
}

export default FeaturedPlaylist
