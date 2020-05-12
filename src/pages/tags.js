import React from "react"
import {useTags} from "../hooks"
import {SEO} from "../components/SEO"
import Tags from "../components/Tags"
import Container from "../styles/Container"

const TagsPage = () => {
    const tags = useTags()

    return (
        <Container centered>
            <SEO title="Tags" />

            <h1>tags</h1>
            <Tags tags={tags} />
        </Container>
    )
}

export default TagsPage
