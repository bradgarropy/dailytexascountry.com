import {useStaticQuery, graphql} from "gatsby"

const useAbout = () => {
    const query = graphql`
        {
            markdownRemark(fileAbsolutePath: {regex: "/content/pages/about/"}) {
                html
            }
        }
    `

    const data = useStaticQuery(query)
    const about = data.markdownRemark

    return about
}

export default useAbout
