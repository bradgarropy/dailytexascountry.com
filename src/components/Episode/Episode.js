import Image from "styles/Image"
import PropTypes from "prop-types"
import styled from "styled-components"
import EpisodeMeta from "components/EpisodeMeta"

const StyledEpisode = styled.article`
    display: grid;
    gap: 1rem;
`

const Episode = ({episode}) => {
    const {videoId, title} = episode
    const thumbnail = episode.localThumbnail.childImageSharp.fluid

    return (
        <StyledEpisode>
            <a
                aria-label={title}
                href={`https://youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image fluid={thumbnail} />
            </a>

            <EpisodeMeta episode={episode} />
        </StyledEpisode>
    )
}

Episode.propTypes = {
    episode: PropTypes.object.isRequired,
}

export default Episode
