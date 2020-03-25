import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Posts from "../components/Posts/Posts"

const TagTemplate = ({uri, data, pageContext}) => {
    const {tag} = pageContext
    const posts = data.allMarkdownRemark.nodes

    return (
        <Container>
            <SEO path={uri} title={`Tag | ${tag}`} />

            <h1>tag: {tag}</h1>
            <Posts posts={posts} />
        </Container>
    )
}

TagTemplate.propTypes = {
    uri: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
}

const query = graphql`
    query($tag: [String]!) {
        allMarkdownRemark(
            filter: {frontmatter: {tags: {in: $tag}}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            nodes {
                frontmatter {
                    slug
                    title
                    date(formatString: "MMMM D, YYYY")
                    tags
                    image {
                        childImageSharp {
                            fluid(maxWidth: 700) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`

export default TagTemplate
export {query}
