import {useStaticQuery, graphql} from "gatsby"

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
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
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
