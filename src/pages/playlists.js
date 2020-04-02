import React from "react"
import {usePlaylists} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Playlists from "../components/Playlists/Playlists"

const PlaylistsPage = () => {
    const playlists = usePlaylists()

    return (
        <Container>
            <SEO title="Playlists" />

            <h1>Playlists</h1>
            <Playlists playlists={playlists} />
        </Container>
    )
}

export default PlaylistsPage
