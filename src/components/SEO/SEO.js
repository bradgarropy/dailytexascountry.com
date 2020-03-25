import React from "react"
import PropTypes from "prop-types"
import Meta from "./Meta"
import Twitter from "./Twitter"
import Facebook from "./Facebook"
import {useSiteMetadata} from "../../hooks"

const SEO = ({path = "", title = "", description = "", image = ""}) => {
    const meta = useSiteMetadata()

    const defaultUrl = meta.url
    const defaultTitle = meta.title
    const defaultTwitterImage = `${meta.url}/twitter.png`
    const defaultFacebookImage = `${meta.url}/facebook.png`

    const seoImage = `${meta.url}${image}`
    const seoUrl = `${meta.url}${path}`

    return (
        <>
            <Meta
                title={title || defaultTitle}
                description={description}
                keywords={meta.keywords}
                icon={`${meta.url}/favicon.png`}
            />

            <Facebook
                url={path ? seoUrl : defaultUrl}
                title={title || defaultTitle}
                description={description}
                image={image ? seoImage : defaultFacebookImage}
            />

            <Twitter
                site={meta.twitter}
                title={title || defaultTitle}
                description={description}
                image={image ? seoImage : defaultTwitterImage}
            />
        </>
    )
}

SEO.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default SEO
