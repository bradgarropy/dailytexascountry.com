import React from "react"
import PropTypes from "prop-types"
import {usePosts} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Posts from "../components/Posts/Posts"

const PostsPage = ({uri}) => {
    const posts = usePosts()

    return (
        <Container>
            <SEO path={uri} title="Posts" />

            <h1>posts</h1>
            <Posts posts={posts} />
        </Container>
    )
}

PostsPage.propTypes = {
    uri: PropTypes.string.isRequired,
}

export default PostsPage
