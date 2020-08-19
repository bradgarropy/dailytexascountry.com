import he from "he"
import {useStaticQuery, graphql} from "gatsby"

const usePlaylist = ({name} = {}) => {
    const query = graphql`
        {
            allSpotifyPlaylist {
                nodes {
                    spotifyId
                    name
                    description
                    tracks {
                        total
                    }
                    external_urls {
                        spotify
                    }
                }
            }
            allPlaylistsJson {
                nodes {
                    spotifyId
                    image {
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)

    const jsonPlaylists = data.allPlaylistsJson.nodes
    const spotifyPlaylists = data.allSpotifyPlaylist.nodes

    // combine data
    const playlists = jsonPlaylists.map(jsonPlaylist => {
        const spotifyPlaylist = spotifyPlaylists.find(
            spotifyPlaylist =>
                spotifyPlaylist.spotifyId === jsonPlaylist.spotifyId,
        )

        return {...jsonPlaylist, ...spotifyPlaylist}
    })

    const playlist = playlists.find(playlist => playlist.name === name)

    // decode description
    playlist.description = he.decode(playlist.description)

    return playlist
}

export default usePlaylist
