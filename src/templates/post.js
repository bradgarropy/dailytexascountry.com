import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const Image = styled(Img)`
    display: block;
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
`

const Tags = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 0.75rem;
`

const PostTemplate = ({data}) => {
    const {html} = data.markdownRemark
    const {image, title, date, tags} = data.markdownRemark.frontmatter

    return (
        <Container>
            <Meta title="post" />
            <Facebook />
            <Twitter />

            <Image fluid={image.childImageSharp.fluid} />

            <h1>{title}</h1>
            <p>{date}</p>

            <Tags>
                {tags.map((tag, index) => (
                    <Link key={index} to={`/tags/${tag}`}>
                        {tag}
                    </Link>
                ))}
            </Tags>

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
