import he from "he"
import {useStaticQuery, graphql} from "gatsby"

const usePlaylists = ({name = undefined, limit = 0} = {}) => {
    const query = graphql`
        {
            allSpotifyPlaylist(
                filter: {name: {regex: "/DTXC|Daily Texas Country/"}}
            ) {
                nodes {
                    name
                    description
                    external_urls {
                        spotify
                    }
                    image {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 700) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
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

    // decode description
    playlists.forEach(
        playlist => (playlist.description = he.decode(playlist.description)),
    )

    return playlists
}

export default usePlaylists
