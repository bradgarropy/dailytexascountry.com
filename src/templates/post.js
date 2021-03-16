import SEO from "@bradgarropy/gatsby-plugin-seo"
import PostMeta from "components/PostMeta"
import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import Container from "styles/Container"
import Post from "styles/Post"
import PostBody from "styles/PostBody"

const Image = styled(GatsbyImage)`
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
    const image = getImage(frontmatter.image)
    const imageUrl = frontmatter.image.publicURL

    return (
        <Container>
            <SEO title={title} image={imageUrl} />

            <Post>
                <Image image={image} alt={title} />

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
                        gatsbyImageData(
                            width: 750
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                            quality: 100
                        )
                    }
                }
            }
        }
    }
`

export default PostTemplate
export {query}
