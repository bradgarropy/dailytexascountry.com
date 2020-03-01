import {useStaticQuery, graphql} from "gatsby"

const useEpisodes = ({limit = 0} = {}) => {
    const query = graphql`
        {
            allYoutubeVideo {
                nodes {
                    title
                    videoId
                    description
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

    let episodes = data.allYoutubeVideo.nodes

    if (limit) {
        episodes = episodes.slice(0, limit)
    }

    // truncate description
    episodes.forEach(
        episode => (episode.description = episode.description.split("---")[0]),
    )

    return episodes
}

export default useEpisodes
