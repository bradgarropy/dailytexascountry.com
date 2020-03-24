import React from "react"
import PropTypes from "prop-types"
import Meta from "./Meta"
import Twitter from "./Twitter"
import Facebook from "./Facebook"

const SEO = ({title = "", description = ""}) => {
    return (
        <>
            <Meta title={title} description={description} />
            <Twitter title={title} description={description} />
            <Facebook title={title} description={description} />
        </>
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default SEO
