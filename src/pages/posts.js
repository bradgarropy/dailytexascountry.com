import React from "react"
import {usePosts} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Posts from "../components/Posts/Posts"

const PostsPage = () => {
    const posts = usePosts()

    return (
        <Container>
            <SEO title="Posts" />

            <h1>Posts</h1>
            <Posts posts={posts} />
        </Container>
    )
}

export default PostsPage
