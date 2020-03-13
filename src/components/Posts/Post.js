import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import PostMeta from "./PostMeta"
import Image from "../../styles/Image"

const StyledPost = styled.article`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    max-width: ${({theme}) => theme.breakpoints.mobile};
    gap: 2rem;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
        gap: 1rem;
    }
`

const Post = ({post}) => {
    const {slug} = post.frontmatter
    const image = post.frontmatter.image.childImageSharp.fluid

    return (
        <StyledPost>
            <Link to={`/blog/${slug}`}>
                <Image fluid={image} />
            </Link>

            <PostMeta post={post} />
        </StyledPost>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post
