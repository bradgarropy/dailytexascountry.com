import {graphql, useStaticQuery} from "gatsby"

const usePosts = ({limit = 0} = {}) => {
    const query = graphql`
        {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/posts/"}}
                sort: {fields: frontmatter___date, order: DESC}
            ) {
                nodes {
                    frontmatter {
                        slug
                        title
                        date(formatString: "MMMM D, YYYY")
                        tags
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 600
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP]
                                    quality: 100
                                )
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
