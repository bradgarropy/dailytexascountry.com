import SEO from "@bradgarropy/gatsby-plugin-seo"
import PostMeta from "components/PostMeta"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import Container from "styles/Container"
import Post from "styles/Post"
import PostBody from "styles/PostBody"

const Image = styled(Img)`
    display: block;
    width: 100%;
    max-height: 50vh;
    object-fit: contain;
    border-radius: 0.25rem;
`

const PostTemplate = ({data}) => {
    const post = data.markdownRemark
    const {html, frontmatter} = post
    const {title} = frontmatter
    const {fluid} = frontmatter.image.childImageSharp
    const image = frontmatter.image.publicURL

    return (
        <Container>
            <SEO title={title} image={image} />

            <Post>
                <Image fluid={fluid} />
                <PostMeta post={post} />
                <PostBody dangerouslySetInnerHTML={{__html: html}} />
            </Post>
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
            frontmatter {
                slug
                title
                date(formatString: "MMMM D, YYYY")
                tags
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 700) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

export default PostTemplate
export {query}
