import {useStaticQuery, graphql} from "gatsby"

const useAbout = () => {
    const query = graphql`
        {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/pages/about/"}}
                sort: {fields: fileAbsolutePath, order: ASC}
            ) {
                nodes {
                    html
                    frontmatter {
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
    const about = data.allMarkdownRemark.nodes

    return about
}

export default useAbout
