import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import Posts from "../components/Posts"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const TagTemplate = ({data, pageContext}) => {
    const {tag} = pageContext
    const posts = data.allMarkdownRemark.nodes

    return (
        <Container>
            <Meta title="post" />
            <Facebook />
            <Twitter />

            <h1>tag: {tag}</h1>
            <Posts posts={posts} />
        </Container>
    )
}

TagTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
}

const query = graphql`
    query($tag: [String]!) {
        allMarkdownRemark(filter: {frontmatter: {tags: {in: $tag}}}) {
            nodes {
                frontmatter {
                    slug
                }
            }
        }
    }
`

export default TagTemplate
export {query}
