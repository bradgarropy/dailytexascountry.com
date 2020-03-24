import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Twitter = ({title = "", description = ""}) => {
    const {url, twitter} = useSiteMetadata()

    return (
        <Helmet>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={`@${twitter}`} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${url}/twitter.png`} />
        </Helmet>
    )
}

Twitter.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Twitter
