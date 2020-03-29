import React from "react"
import {useAbout} from "../hooks"
import Post from "../styles/Post"
import {SEO} from "../components/SEO"
import PostBody from "../styles/PostBody"
import Container from "../styles/Container"

const AboutPage = () => {
    const {html} = useAbout()

    return (
        <Container>
            <SEO title="About" />

            <Post>
                <PostBody dangerouslySetInnerHTML={{__html: html}} />
            </Post>
        </Container>
    )
}

export default AboutPage
