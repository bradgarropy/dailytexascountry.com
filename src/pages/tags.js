import SEO from "@bradgarropy/gatsby-plugin-seo"
import Tags from "components/Tags"
import {useTags} from "hooks"
import Container from "styles/Container"

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
