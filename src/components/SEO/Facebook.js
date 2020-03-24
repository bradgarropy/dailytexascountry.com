import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import useSiteMetadata from "../../hooks"

const Facebook = ({title = "", description = ""}) => {
    const {url} = useSiteMetadata()

    return (
        <Helmet>
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}/facebook.png`} />
        </Helmet>
    )
}

Facebook.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Facebook
