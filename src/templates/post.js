import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const Image = styled.img`
    display: block;
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
`

const PostTemplate = ({data}) => {
    const {html} = data.markdownRemark
    const {image, title, date, tags} = data.markdownRemark.frontmatter
    console.log(tags)

    return (
        <Container>
            <Meta title="post" />
            <Facebook />
            <Twitter />

            <Image src={image} alt="" />

            <h1>{title}</h1>
            <p>{date}</p>

            {tags && <p>{tags.join(", ")}</p>}

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
                image
            }
        }
    }
`

export default PostTemplate
export {query}
