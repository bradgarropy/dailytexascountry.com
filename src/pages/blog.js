import React from "react"
import {usePosts} from "../hooks"
import Container from "../styles/Container"
import Posts from "../components/Posts/Posts"
import {Meta, Twitter, Facebook} from "../components/SEO"

const BlogPage = () => {
    const posts = usePosts()

    return (
        <Container>
            <Meta title="Blog" />
            <Facebook />
            <Twitter />

            <h1>blog</h1>
            <Posts posts={posts} />
        </Container>
    )
}

export default BlogPage
