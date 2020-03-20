import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Container from "../styles/Container"
import PostMeta from "../components/Posts/PostMeta"
import {Meta, Twitter, Facebook} from "../components/SEO"

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
`

const PostBody = styled.div`
    line-height: 1.75;
    font-size: 1.1rem;

    p:first-of-type {
        margin-top: 0;
    }

    *::selection {
        background: ${({theme}) => theme.colors.redSelection};
        color: ${({theme}) => theme.colors.white};
    }

    table {
        margin: 2rem auto !important;
        border: 0.1rem solid ${({theme}) => theme.colors.blue};
        border-radius: 0.25rem;
        padding: 0.5rem;
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

    a:not(.anchor):not(.instagram-media > a) {
        transition: all 300ms ease 0s;
        box-shadow: ${({theme}) => theme.colors.red} 0 -0.1rem inset;
    }

    a:not(.anchor):not(.instagram-media > a):hover {
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
    const image = frontmatter.image.childImageSharp.fluid

    return (
        <Container>
            <Meta title="post" />
            <Facebook />
            <Twitter />

            <Post>
                <Image fluid={image} />
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
