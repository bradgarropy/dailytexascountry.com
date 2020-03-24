import React from "react"
import {usePosts} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Posts from "../components/Posts/Posts"

const BlogPage = () => {
    const posts = usePosts()

    return (
        <Container>
            <SEO title="Blog" />

            <h1>blog</h1>
            <Posts posts={posts} />
        </Container>
    )
}

export default BlogPage
