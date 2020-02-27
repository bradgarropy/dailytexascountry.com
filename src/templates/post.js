import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const PostTemplate = ({data}) => {
    const {html} = data.markdownRemark

    return (
        <Container>
            <Meta title="post" />
            <Facebook />
            <Twitter />

            <div dangerouslySetInnerHTML={{__html: html}} />
        </Container>
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
