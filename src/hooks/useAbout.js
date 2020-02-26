import {useStaticQuery, graphql} from "gatsby"

const useAbout = () => {
    const query = graphql`
        {
            file(
                sourceInstanceName: {eq: "pages"}
                relativeDirectory: {eq: "about"}
            ) {
                childMarkdownRemark {
                    html
                }
            }
        }
    `

    const data = useStaticQuery(query)
    const about = data.file.childMarkdownRemark

    return about
}

export default useAbout
