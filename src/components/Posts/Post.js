import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../../styles/Image"

const StyledPost = styled.article`
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 50rem;
    gap: 2rem;
    align-items: start;
`

const PostTitle = styled(Link)`
    text-decoration: none;
    justify-self: start;

    h2 {
        font-size: 2rem;
        display: inline;
    }
`

const Post = ({post}) => {
    const {slug, title} = post.frontmatter
    const image = post.frontmatter.image.childImageSharp.fluid

    return (
        <StyledPost>
            <Link to={`/blog/${slug}`}>
                <Image fluid={image} />
            </Link>

            <PostTitle to={`/blog/${slug}`}>
                <h2>{title}</h2>
            </PostTitle>
        </StyledPost>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post
