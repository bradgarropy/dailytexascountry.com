import React from "react"
import PropTypes from "prop-types"
import Meta from "./Meta"
import Twitter from "./Twitter"
import Facebook from "./Facebook"
import {useSiteMetadata} from "../../hooks"
import twitter from "../../../static/twitter.png"
import favicon from "../../../static/favicon.png"
import facebook from "../../../static/facebook.png"

const SEO = ({url = "", title = "", description = ""}) => {
    const meta = useSiteMetadata()
    console.log(meta)

    const defaultUrl = meta.url
    const defaultTitle = meta.title
    const defaultDescription = meta.description
    const defaultTwitterImage = `${meta.url}${twitter}`
    const defaultFacebookImage = `${meta.url}${facebook}`

    console.log(defaultTwitterImage)
    console.log(defaultFacebookImage)

    return (
        <>
            <Meta
                title={title || defaultTitle}
                description={description || defaultDescription}
                keywords={meta.keywords}
                icon={favicon}
            />

            <Facebook
                url={url || defaultUrl}
                title={title || defaultTitle}
                description={description || defaultDescription}
                image={defaultFacebookImage}
            />

            <Twitter
                site={meta.twitter}
                title={title || defaultTitle}
                description={description || defaultDescription}
                image={defaultTwitterImage}
            />
        </>
    )
}

SEO.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default SEO
