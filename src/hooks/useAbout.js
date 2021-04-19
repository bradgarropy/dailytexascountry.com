import {graphql, useStaticQuery} from "gatsby"

const useAbout = () => {
    const query = graphql`
        {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/pages/about/"}}
                sort: {fields: frontmatter___order, order: ASC}
            ) {
                nodes {
                    html
                    frontmatter {
                        title
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 700
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
    const about = data.allMarkdownRemark.nodes

    return about
}

export default useAbout
