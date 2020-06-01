import React from "react"
import styled from "styled-components"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import {usePosts} from "../hooks"
import Container from "../styles/Container"
import Posts from "../components/Posts/Posts"

const StyledPostsPage = styled.div`
    display: grid;
    gap: 2rem;
    justify-self: center;
    width: 100%;
    max-width: 37.5rem;
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
