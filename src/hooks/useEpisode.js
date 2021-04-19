import {graphql, useStaticQuery} from "gatsby"

const useEpisode = () => {
    const query = graphql`
        {
            allYoutubeVideo(
                limit: 1
                sort: {fields: publishedAt, order: DESC}
            ) {
                nodes {
                    title
                    videoId
                    description
                    publishedAt(formatString: "MMMM D, YYYY")
                    localThumbnail {
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
    `

    const data = useStaticQuery(query)

    const episode = data.allYoutubeVideo.nodes[0]

    // truncate description
    episode.description = episode.description.split("---")[0]

    return episode
}

export default useEpisode
