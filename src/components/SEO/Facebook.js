import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const Facebook = ({title = "", description = ""}) => {
    return (
        <Helmet>
            <meta property="og:url" content="https://dailytexascountry.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta
                property="og:image"
                content="https://dailytexascountry.com/facebook.png"
            />
        </Helmet>
    )
}

Facebook.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Facebook
