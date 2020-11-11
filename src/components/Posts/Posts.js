import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Post from "components/Posts/Post"

const StyledPosts = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 5rem;
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
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Posts
