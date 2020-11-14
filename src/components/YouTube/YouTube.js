import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledYouTube = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    margin: 0 auto;

    ::after {
        padding-top: 56.25%;
        display: block;
        content: "";
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const YouTube = ({id}) => {
    return (
        <StyledYouTube>
            <iframe
                title={id}
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </StyledYouTube>
    )
}

YouTube.propTypes = {
    id: PropTypes.string.isRequired,
}

export default YouTube
