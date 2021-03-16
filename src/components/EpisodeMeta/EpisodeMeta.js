import PropTypes from "prop-types"
import styled from "styled-components"
import Title from "styles/Title"

const StyledEpisodeMeta = styled.div`
    display: grid;
`

const TitleLink = styled.a`
    justify-self: start;
`

const EpisodeMeta = ({episode}) => {
    const {videoId, title, publishedAt} = episode

    return (
        <StyledEpisodeMeta>
            <span>{publishedAt}</span>

            <TitleLink
                href={`https://youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Title>{title}</Title>
            </TitleLink>
        </StyledEpisodeMeta>
    )
}

EpisodeMeta.propTypes = {
    episode: PropTypes.object.isRequired,
}

export default EpisodeMeta
