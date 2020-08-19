import he from "he"
import {useStaticQuery, graphql} from "gatsby"

const usePlaylists = ({name = undefined, limit = 0} = {}) => {
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
    let playlists = jsonPlaylists.map(jsonPlaylist => {
        const spotifyPlaylist = spotifyPlaylists.find(
            spotifyPlaylist =>
                spotifyPlaylist.spotifyId === jsonPlaylist.spotifyId,
        )

        return {...jsonPlaylist, ...spotifyPlaylist}
    })

    if (limit) {
        playlists = playlists.slice(0, limit)
    }

    if (name) {
        playlists = playlists.filter(playlist => playlist.name === name)
    }

    // decode description
    playlists.forEach(
        playlist => (playlist.description = he.decode(playlist.description)),
    )

    return playlists
}

export default usePlaylists
