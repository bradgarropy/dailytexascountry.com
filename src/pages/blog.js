import React from "react"
import {Link} from "gatsby"
import {usePosts} from "../hooks"
import {Meta, Twitter, Facebook} from "../components/SEO"

const BlogPage = () => {
    const posts = usePosts()

    return (
        <>
            <Meta title="blog" />
            <Facebook />
            <Twitter />

            <h1>blog</h1>

            <ul>
                {posts.map((post, index) => {
                    const {relativeDirectory} = post

                    return (
                        <li key={index}>
                            <Link to={`/blog/${relativeDirectory}`}>
                                {relativeDirectory}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default BlogPage
