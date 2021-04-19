import {graphql, useStaticQuery} from "gatsby"

const useEpisodes = ({limit = 0} = {}) => {
    const query = graphql`
        {
            allYoutubeVideo(sort: {fields: publishedAt, order: DESC}) {
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

    let episodes = data.allYoutubeVideo.nodes

    if (limit) {
        episodes = episodes.slice(0, limit + 1)
    }

    // truncate description
    episodes.forEach(
        episode => (episode.description = episode.description.split("---")[0]),
    )

    return episodes
}

export default useEpisodes
