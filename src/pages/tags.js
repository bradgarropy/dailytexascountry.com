import React from "react"
import {useTags} from "../hooks"
import Tags from "../components/Tags"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const TagsPage = () => {
    const tags = useTags()

    return (
        <Container>
            <Meta title="Tags" />
            <Facebook />
            <Twitter />

            <h1>tags</h1>
            <Tags tags={tags} />
        </Container>
    )
}

export default TagsPage
