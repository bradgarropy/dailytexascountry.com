import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../../styles/Image"
import Title from "../../styles/Title"

const StyledEpisode = styled.article`
    display: grid;
    gap: 1rem;
    width: 55%;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 70%;
    }
`

const TitleLink = styled.a`
    justify-self: start;
`

const Episode = ({episode}) => {
    const {videoId, title} = episode
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

            <TitleLink
                href={`https://youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Title>{title}</Title>
            </TitleLink>
        </StyledEpisode>
    )
}

Episode.propTypes = {
    episode: PropTypes.object.isRequired,
}

export default Episode
