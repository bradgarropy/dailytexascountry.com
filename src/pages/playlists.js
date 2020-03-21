import React from "react"
import {usePlaylists} from "../hooks"
import Container from "../styles/Container"
import Playlists from "../components/Playlists/Playlists"
import {Meta, Twitter, Facebook} from "../components/SEO"

const PlaylistsPage = () => {
    const playlists = usePlaylists()

    return (
        <Container>
            <Meta title="Playlists" />
            <Facebook />
            <Twitter />

            <h1>playlists</h1>
            <Playlists playlists={playlists} />
        </Container>
    )
}

export default PlaylistsPage
