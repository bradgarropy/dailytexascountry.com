import React from "react"
import PropTypes from "prop-types"

const YouTube = ({id}) => {
    return (
        <div className="youtube">
            <iframe
                title={id}
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}

YouTube.propTypes = {
    id: PropTypes.string.isRequired,
}

export default YouTube
