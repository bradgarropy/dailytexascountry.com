import {useStaticQuery, graphql} from "gatsby"

const usePosts = ({limit = 0} = {}) => {
    const query = graphql`
        {
            allFile(
                filter: {
                    sourceInstanceName: {eq: "posts"}
                    extension: {eq: "md"}
                }
            ) {
                nodes {
                    relativeDirectory
                }
            }
        }
    `

    const data = useStaticQuery(query)

    let posts = data.allFile.nodes

    if (limit) {
        posts = posts.slice(0, limit)
    }

    return posts
}

export default usePosts
