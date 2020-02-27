import React from "react"
import {usePosts} from "../hooks"
import Posts from "../components/Posts"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const BlogPage = () => {
    const posts = usePosts()

    return (
        <Container>
            <Meta title="blog" />
            <Facebook />
            <Twitter />

            <Posts posts={posts} />
        </Container>
    )
}

export default BlogPage
