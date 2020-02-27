import {useStaticQuery, graphql} from "gatsby"

const useEpisodes = ({limit = 0} = {}) => {
    const query = graphql`
        {
            allYoutubeVideo {
                nodes {
                    title
                    videoId
                }
            }
        }
    `

    const data = useStaticQuery(query)

    let episodes = data.allYoutubeVideo.nodes

    if (limit) {
        episodes = episodes.slice(0, limit)
    }

    return episodes
}

export default useEpisodes
