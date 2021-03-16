import EpisodeMeta from "components/EpisodeMeta"
import {getImage} from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "styles/Image"

const StyledEpisode = styled.article`
    display: grid;
    gap: 1rem;
`

const Episode = ({episode}) => {
    const {videoId, title} = episode
    const thumbnail = getImage(episode.localThumbnail)

    return (
        <StyledEpisode>
            <a
                aria-label={title}
                href={`https://youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image image={thumbnail} alt={title} />
            </a>

            <EpisodeMeta episode={episode} />
        </StyledEpisode>
    )
}

Episode.propTypes = {
    episode: PropTypes.object.isRequired,
}

export default Episode
