import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../../styles/Image"

const StyledEpisode = styled.article`
    width: 55%;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 70%;
    }
`

const Episode = ({episode}) => {
    const {videoId, title, description} = episode
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

            <a
                href={`https://youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <p>{title}</p>
            </a>

            <p>{description}</p>
        </StyledEpisode>
    )
}

Episode.propTypes = {
    episode: PropTypes.object.isRequired,
}

export default Episode
