import {useStaticQuery, graphql} from "gatsby"

const useEpisodes = () => {
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
    const episodes = data.allYoutubeVideo.nodes
    console.log(episodes)

    return episodes
}

export default useEpisodes
