import React from "react"
import PropTypes from "prop-types"
import Meta from "./Meta"
import Twitter from "./Twitter"
import Facebook from "./Facebook"
import {useSiteMetadata} from "../../hooks"

const SEO = ({url = "", title = "", description = ""}) => {
    const meta = useSiteMetadata()

    const defaultUrl = meta.url
    const defaultTitle = meta.title
    const twitterImage = `${meta.url}/twitter.png`
    const facebookImage = `${meta.url}/facebook.png`

    return (
        <>
            <Meta
                title={title || defaultTitle}
                description={description}
                keywords={meta.keywords}
                icon={`${meta.url}/favicon.png`}
            />

            <Facebook
                url={url || defaultUrl}
                title={title || defaultTitle}
                description={description}
                image={facebookImage}
            />

            <Twitter
                site={meta.twitter}
                title={title || defaultTitle}
                description={description}
                image={twitterImage}
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
