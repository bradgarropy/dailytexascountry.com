import React from "react"
import PropTypes from "prop-types"
import {useTags} from "../hooks"
import {SEO} from "../components/SEO"
import Tags from "../components/Tags"
import Container from "../styles/Container"

const TagsPage = ({uri}) => {
    const tags = useTags()

    return (
        <Container>
            <SEO path={uri} title="Tags" />

            <h1>tags</h1>
            <Tags tags={tags} />
        </Container>
    )
}

TagsPage.propTypes = {
    uri: PropTypes.string.isRequired,
}

export default TagsPage
