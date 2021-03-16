import Episode from "components/Episode"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledEpisodes = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 5rem;
    justify-content: center;
`

const Episodes = ({episodes}) => {
    return (
        <StyledEpisodes>
            {episodes.map((episode, index) => (
                <Episode episode={episode} key={index} />
            ))}
        </StyledEpisodes>
    )
}

Episodes.propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Episodes
