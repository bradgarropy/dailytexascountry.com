import {useStaticQuery, graphql} from "gatsby"

const usePlaylists = ({limit = 0} = {}) => {
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

    let playlists = data.allSpotifyPlaylist.nodes

    if (limit) {
        playlists = playlists.slice(0, limit)
    }

    return playlists
}

export default usePlaylists
