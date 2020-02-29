import {useStaticQuery, graphql} from "gatsby"
import decode from "../utils/decode"

const usePlaylist = ({name} = {}) => {
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

    const playlists = data.allSpotifyPlaylist.nodes
    const playlist = playlists.find(playlist => playlist.name === name)

    // decode description
    playlist.description = decode(playlist.description)

    return playlist
}

export default usePlaylist
