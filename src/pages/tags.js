import React from "react"
import {useTags} from "../hooks"
import {SEO} from "../components/SEO"
import Tags from "../components/Tags"
import Container from "../styles/Container"
import PageTitle from "../styles/PageTitle"

const TagsPage = () => {
    const tags = useTags()

    return (
        <Container>
            <SEO title="Tags" />

            <PageTitle>tags</PageTitle>
            <Tags tags={tags} />
        </Container>
    )
}

export default TagsPage
