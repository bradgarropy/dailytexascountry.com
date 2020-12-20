import {graphql, useStaticQuery} from "gatsby"

const useSiteMetadata = () => {
    const query = graphql`
        {
            site {
                siteMetadata {
                    url
                    title
                    description
                    keywords
                    email
                    twitter
                    youtube
                    instagram
                    spotify
                }
            }
        }
    `

    const data = useStaticQuery(query)
    const {siteMetadata} = data.site

    return siteMetadata
}

export default useSiteMetadata
