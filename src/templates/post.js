import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import PostMeta from "../components/Posts/PostMeta"

const Post = styled.article`
    display: grid;
    max-width: ${({theme}) => theme.breakpoints.mobile};
    justify-self: center;
    gap: 2rem;
`

const Image = styled(Img)`
    display: block;
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
    border-radius: 0.25rem;
`

const PostBody = styled.div`
    line-height: 1.75;
    font-size: 1.1rem;

    p:first-of-type {
        margin-top: 0;
    }

    table {
        margin: 2rem auto !important;
        border-radius: 0.25rem;
        padding: 0.5rem;
        border-collapse: collapse;
    }

    thead tr {
        border-bottom: 0.2rem solid ${({theme}) => theme.colors.blue};
    }

    th {
        font-family: "Patua One";
        font-weight: normal;
        font-size: 1.25rem;
    }

    td {
        font-size: 1rem;
    }

    th:not(:last-child),
    td:not(:last-child) {
        padding: 0 1rem 0 0;
    }

    th:last-child,
    tr:last-child {
        padding: 0;
    }

    a:not(.anchor) {
        transition: all 300ms ease 0s;
        box-shadow: ${({theme}) => theme.colors.red} 0 -0.1rem inset;
    }

    a:not(.anchor):hover {
        text-decoration: none;
        color: ${({theme}) => theme.colors.white};
        box-shadow: ${({theme}) => theme.colors.red} 0 -2rem 0 inset;
        padding: 0px 0.2rem;
        margin: 0px -0.2rem;
    }

    iframe {
        margin: 1rem auto;
    }

    twitter-widget {
        margin: 2rem auto !important;
    }

    .instagram-media {
        margin: 2rem auto !important;
    }
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
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default PostTemplate
export {query}
