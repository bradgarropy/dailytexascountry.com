import {useStaticQuery, graphql} from "gatsby"

const usePlaylists = () => {
    const query = graphql`
        {
            allSpotifyPlaylist {
                nodes {
                    name
                    external_urls {
                        spotify
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)
    const playlists = data.allSpotifyPlaylist.nodes

    return playlists
}

export default usePlaylists
