import Link from "@bradgarropy/gatsby-link"
import EpisodeMeta from "components/EpisodeMeta"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "styles/Image"

const StyledEpisode = styled.article`
    display: grid;
    gap: 1rem;
`

const Episode = ({episode}) => {
    const {videoId, title} = episode
    const thumbnail = episode.localThumbnail.childImageSharp.fluid

    return (
        <StyledEpisode>
            <Link
                aria-label={title}
                to={`https://youtube.com/watch?v=${videoId}`}
            >
                <Image fluid={thumbnail} />
            </Link>

            <EpisodeMeta episode={episode} />
        </StyledEpisode>
    )
}

Episode.propTypes = {
    episode: PropTypes.object.isRequired,
}

export default Episode
