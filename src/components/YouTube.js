import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledYouTube = styled.iframe`
    display: block;
`

const YouTube = ({id}) => {
    return (
        <StyledYouTube
            title={id}
            width="560"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    )
}

YouTube.propTypes = {
    id: PropTypes.string.isRequired,
}

export default YouTube
