import {useStaticQuery, graphql} from "gatsby"

const useTags = ({limit = 0} = {}) => {
    const query = graphql`
        {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/posts/"}}
            ) {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `

    const data = useStaticQuery(query)

    let tags = data.allMarkdownRemark.group.map(member => member.fieldValue)

    if (limit) {
        tags = tags.slice(0, limit)
    }

    return tags
}

export default useTags
