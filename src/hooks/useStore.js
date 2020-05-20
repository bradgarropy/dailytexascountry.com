import {useStaticQuery, graphql} from "gatsby"

const useStore = () => {
    const query = graphql`
        {
            markdownRemark(fileAbsolutePath: {regex: "/content/pages/store/"}) {
                html
                frontmatter {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)
    const store = data.markdownRemark

    return store
}

export default useStore
