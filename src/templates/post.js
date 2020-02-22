import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import {Meta, Twitter, Facebook} from "../components/SEO"

const PostTemplate = ({data}) => {
    const {html} = data.markdownRemark

    return (
        <>
            <Meta title="post" />
            <Facebook />
            <Twitter />

            <div dangerouslySetInnerHTML={{__html: html}} />
        </>
    )
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
        }
    }
`

export default PostTemplate
export {query}
