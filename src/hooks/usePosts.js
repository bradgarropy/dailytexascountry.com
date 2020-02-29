import {useStaticQuery, graphql} from "gatsby"

const usePosts = ({limit = 0} = {}) => {
    const query = graphql`
        {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/posts/"}}
                sort: {fields: frontmatter___date}
            ) {
                nodes {
                    frontmatter {
                        slug
                        title
                        image {
                            childImageSharp {
                                fluid(maxWidth: 700) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)

    let posts = data.allMarkdownRemark.nodes

    if (limit) {
        posts = posts.slice(0, limit)
    }

    return posts
}

export default usePosts
