import React from "react"
import Img from "gatsby-image"
import PropType from "prop-types"
import styled from "styled-components"

const StyledEpisodes = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
`

const Episodes = ({episodes}) => {
    return (
        <StyledEpisodes>
            {episodes.map((episode, index) => {
                const {videoId, title, description} = episode
                const thumbnail = episode.localThumbnail.childImageSharp.fluid

                return (
                    <article key={index}>
                        <a
                            href={`https://youtube.com/watch?v=${videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img fluid={thumbnail} />
                        </a>

                        <a
                            href={`https://youtube.com/watch?v=${videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>{title}</p>
                        </a>

                        <p>{description}</p>
                    </article>
                )
            })}
        </StyledEpisodes>
    )
}

Episodes.propTypes = {
    episodes: PropType.arrayOf(PropType.object).isRequired,
}

export default Episodes
