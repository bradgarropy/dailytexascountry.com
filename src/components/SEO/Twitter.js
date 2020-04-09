import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"

const Twitter = ({
    card = "summary",
    site = "",
    title = "",
    description = "",
    image = "",
}) => {
    return (
        <Helmet>
            <meta name="twitter:card" content={card} />
            <meta name="twitter:site" content={site && `@${site}`} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
}

Twitter.propTypes = {
    card: PropTypes.string,
    site: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Twitter
