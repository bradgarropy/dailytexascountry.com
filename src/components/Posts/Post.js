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

const PostInfo = styled.div`
    display: grid;
`

const PostTitle = styled(Link)`
    text-decoration: none;
    justify-self: start;

    h2 {
        font-size: 2rem;
        margin: 0 0 0.3rem 0;
    }
`

const PostTags = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 0.5rem;
`

const PostTag = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.red};
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
    border-radius: 0.25rem;
`

const Post = ({post}) => {
    const {slug, title, date, tags} = post.frontmatter
    const image = post.frontmatter.image.childImageSharp.fluid

    return (
        <StyledPost>
            <Link to={`/blog/${slug}`}>
                <Image fluid={image} />
            </Link>

            <PostInfo>
                <span>{date}</span>

                <PostTitle to={`/blog/${slug}`}>
                    <h2>{title}</h2>
                </PostTitle>

                <PostTags>
                    {tags.map((tag, index) => (
                        <PostTag key={index} to={`/tags/${tag}`}>
                            {tag}
                        </PostTag>
                    ))}
                </PostTags>
            </PostInfo>
        </StyledPost>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post
