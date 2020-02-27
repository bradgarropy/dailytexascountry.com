import React from "react"
import PropType from "prop-types"

const Playlists = ({playlists}) => {
    return (
        <>
            <h1>playlists</h1>

            <ul>
                {playlists.map((playlist, index) => {
                    const {name} = playlist
                    const url = playlist.external_urls.spotify

                    return (
                        <li key={index}>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

Playlists.propTypes = {
    playlists: PropType.arrayOf(PropType.object).isRequired,
}

export default Playlists
