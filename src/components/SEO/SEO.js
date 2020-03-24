import React from "react"
import PropTypes from "prop-types"
import Meta from "./Meta"
import Twitter from "./Twitter"
import Facebook from "./Facebook"

const SEO = ({title, description}) => {
    return (
        <>
            <Meta />
            <Twitter />
            <Facebook />
        </>
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default SEO
