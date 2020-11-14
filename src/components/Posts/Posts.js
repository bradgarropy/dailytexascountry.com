import React from "react"
import PropTypes from "prop-types"
import Post from "components/Post"
import styled from "styled-components"

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
