import React from "react"
import PropType from "prop-types"
import styled from "styled-components"
import Post from "./Post"

const StyledPosts = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 5rem;
    justify-content: center;
`

const Posts = ({posts}) => {
    return (
        <StyledPosts>
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </StyledPosts>
    )
}

Posts.propTypes = {
    posts: PropType.arrayOf(PropType.object).isRequired,
}

export default Posts
