import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../../styles/Image"
import EpisodeMeta from "./EpisodeMeta"

const StyledEpisode = styled.article`
    display: grid;
    gap: 1rem;
    width: 55%;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 100%;
    }
`

const Episode = ({episode}) => {
    const {videoId} = episode
    const thumbnail = episode.localThumbnail.childImageSharp.fluid

    return (
        <StyledEpisode>
            <a
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
