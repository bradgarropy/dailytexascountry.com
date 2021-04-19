import Link from "@bradgarropy/gatsby-link"
import PostMeta from "components/PostMeta"
import {getImage} from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "styles/Image"

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
    const image = getImage(post.frontmatter.image)

    return (
        <StyledPost>
            <Link aria-label={title} to={`/posts/${slug}`}>
                <Image image={image} alt={title} />
            </Link>

            <PostMeta post={post} />
        </StyledPost>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post
