import Image from "styles/Image"
import PropTypes from "prop-types"
import styled from "styled-components"

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
    const image = playlist.image.childImageSharp.fluid

    return (
        <StyledFeaturedPlaylist>
            <a
                aria-label="Daily Texas Country"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <PlaylistImage fluid={image} />
            </a>

            <PlaylistInfo>
                <a
                    aria-label="Daily Texas Country"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h1>{name}</h1>
                </a>

                <span>{description}</span>
            </PlaylistInfo>
        </StyledFeaturedPlaylist>
    )
}

FeaturedPlaylist.propTypes = {
    playlist: PropTypes.object.isRequired,
}

export default FeaturedPlaylist
