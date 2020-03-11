import {useStaticQuery, graphql} from "gatsby"

const useEpisode = () => {
    const query = graphql`
        {
            allYoutubeVideo(limit: 1, sort: {fields: publishedAt, order: ASC}) {
                nodes {
                    title
                    videoId
                    description
                    publishedAt(formatString: "MMMM D, YYYY")
                    localThumbnail {
                        childImageSharp {
                            fluid(maxWidth: 700) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)

    const episode = data.allYoutubeVideo.nodes[0]

    // truncate description
    episode.description = episode.description.split("---")[0]

    return episode
}

export default useEpisode
