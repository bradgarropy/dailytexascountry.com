import React from "react"
import {usePlaylists} from "../hooks"
import {Meta, Twitter, Facebook} from "../components/SEO"

const PlaylistsPage = () => {
    const playlists = usePlaylists()

    return (
        <>
            <Meta title="playlists" />
            <Facebook />
            <Twitter />

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

export default PlaylistsPage
