import React from "react"
import {usePlaylists} from "../hooks"
import Container from "../styles/Container"
import Playlists from "../components/Playlists"
import {Meta, Twitter, Facebook} from "../components/SEO"

const PlaylistsPage = () => {
    const playlists = usePlaylists()

    return (
        <Container>
            <Meta title="playlists" />
            <Facebook />
            <Twitter />

            <Playlists playlists={playlists} />
        </Container>
    )
}

export default PlaylistsPage
