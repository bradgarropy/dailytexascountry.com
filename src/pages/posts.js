import React from "react"
import {usePosts} from "hooks"
import Posts from "components/Posts"
import styled from "styled-components"
import Container from "styles/Container"
import SEO from "@bradgarropy/gatsby-plugin-seo"

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
