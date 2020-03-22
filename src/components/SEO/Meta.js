import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import icon from "../../../static/favicon.png"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Meta = ({title}) => {
    const {description, keywords} = useSiteMetadata()

    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="icon" type="image/png" href={icon} />
        </Helmet>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
}

export default Meta
