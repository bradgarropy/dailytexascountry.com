import {useStaticQuery, graphql} from "gatsby"

const usePlaylists = ({name = undefined, limit = 0} = {}) => {
    const query = graphql`
        {
            allSpotifyPlaylist(
                filter: {name: {regex: "/DTXC|Daily Texas Country/"}}
            ) {
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

    if (name) {
        playlists = playlists.filter(playlist => playlist.name === name)
    }

    return playlists
}

export default usePlaylists
