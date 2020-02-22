import {useStaticQuery, graphql} from "gatsby"

const usePosts = () => {
    const query = graphql`
        {
            allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
                nodes {
                    relativePath
                }
            }
        }
    `

    const data = useStaticQuery(query)
    const posts = data.allFile.nodes

    return posts
}

export default usePosts
