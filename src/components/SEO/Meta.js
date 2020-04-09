import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"

const Meta = ({title = "", description = "", keywords = [], icon = ""}) => {
    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(",")} />
            <link rel="icon" type="image/png" href={icon} />
        </Helmet>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
}

export default Meta
