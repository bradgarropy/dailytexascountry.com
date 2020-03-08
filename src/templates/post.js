import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Container from "../styles/Container"
import PostMeta from "../components/Posts/PostMeta"
import {Meta, Twitter, Facebook} from "../components/SEO"

const Image = styled(Img)`
    display: block;
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
    margin-bottom: 2rem;
`

const PostBody = styled.div`
    margin-top: 2rem;
    line-height: 1.75;
    font-size: 1.1rem;
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

            <Image fluid={image} />
            <PostMeta post={post} />
            <PostBody dangerouslySetInnerHTML={{__html: html}} />
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
