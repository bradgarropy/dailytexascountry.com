import React from "react"
import PropTypes from "prop-types"
import {usePosts} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Posts from "../components/Posts/Posts"

const BlogPage = ({uri}) => {
    const posts = usePosts()

    return (
        <Container>
            <SEO path={uri} title="Blog" />

            <h1>blog</h1>
            <Posts posts={posts} />
        </Container>
    )
}

BlogPage.propTypes = {
    uri: PropTypes.string.isRequired,
}

export default BlogPage
