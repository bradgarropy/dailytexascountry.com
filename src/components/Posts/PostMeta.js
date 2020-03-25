import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Title from "../../styles/Title"

const StyledPostMeta = styled.div`
    display: grid;
`

const PostTitle = styled(Link)`
    justify-self: start;
`

const PostTags = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 0.5rem;
    margin-top: 0.3rem;
`

const PostTag = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.red};
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
    border-radius: 0.25rem;
`

const PostMeta = ({post}) => {
    const {slug, title, date, tags} = post.frontmatter

    return (
        <StyledPostMeta>
            <span>{date}</span>

            <PostTitle to={`/posts/${slug}`}>
                <Title>{title}</Title>
            </PostTitle>

            <PostTags>
                {tags.map((tag, index) => (
                    <PostTag key={index} to={`/tags/${tag}`}>
                        {tag}
                    </PostTag>
                ))}
            </PostTags>
        </StyledPostMeta>
    )
}

PostMeta.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostMeta
