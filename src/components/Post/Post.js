import React from "react"
import {Link} from "gatsby"
import Image from "styles/Image"
import PropTypes from "prop-types"
import styled from "styled-components"
import PostMeta from "components/PostMeta"

const StyledPost = styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`

const Post = ({post}) => {
    const {slug, title} = post.frontmatter
    const image = post.frontmatter.image.childImageSharp.fluid

    return (
        <StyledPost>
            <Link aria-label={title} to={`/posts/${slug}`}>
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
