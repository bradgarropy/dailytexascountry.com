import React from "react"
import {usePosts} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import PageTitle from "../styles/PageTitle"
import Posts from "../components/Posts/Posts"

const PostsPage = () => {
    const posts = usePosts()

    return (
        <Container>
            <SEO title="Posts" />

            <PageTitle>Posts</PageTitle>
            <Posts posts={posts} />
        </Container>
    )
}

export default PostsPage
