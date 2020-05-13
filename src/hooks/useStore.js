import {useStaticQuery, graphql} from "gatsby"

const useStore = () => {
    const query = graphql`
        {
            file(absolutePath: {regex: "/content/pages/store/"}) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)
    const store = data.file.childImageSharp

    return store
}

export default useStore
