import React from "react"
import styled from "styled-components"
import {usePosts} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Posts from "../components/Posts/Posts"

const StyledPostsPage = styled.div`
    display: grid;
    gap: 2rem;
`

const PostsPage = () => {
    const posts = usePosts()

    return (
        <Container>
            <SEO title="Posts" />

            <StyledPostsPage>
                <h1>Posts</h1>
                <Posts posts={posts} />
            </StyledPostsPage>
        </Container>
    )
}

export default PostsPage
