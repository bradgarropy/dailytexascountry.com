import React from "react"
import {useTags} from "hooks"
import Tags from "components/Tags"
import Container from "styles/Container"
import SEO from "@bradgarropy/gatsby-plugin-seo"

const TagsPage = () => {
    const tags = useTags()

    return (
        <Container centered>
            <SEO title="Tags" />

            <h1>Tags</h1>
            <Tags tags={tags} />
        </Container>
    )
}

export default TagsPage
