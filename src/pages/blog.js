import React from "react"
import {Link} from "gatsby"
import {Meta, Twitter, Facebook} from "../components/SEO"
import {usePosts} from "../hooks"

const BlogPage = () => {
    const posts = usePosts()

    return (
        <>
            <Meta title="blog" />
            <Facebook />
            <Twitter />

            <h1>blog</h1>

            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <Link to={`/blog/${post.relativeDirectory}`}>
                            {post.relativeDirectory}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BlogPage
