import {useStaticQuery, graphql} from "gatsby"

const usePlaylist = ({name} = {}) => {
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

    const playlists = data.allSpotifyPlaylist.nodes
    const playlist = playlists.find(playlist => playlist.name === name)

    return playlist
}

export default usePlaylist
