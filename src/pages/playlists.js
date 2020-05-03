import React from "react"
import {usePlaylists} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import PageTitle from "../styles/PageTitle"
import Playlists from "../components/Playlists/Playlists"

const PlaylistsPage = () => {
    const playlists = usePlaylists()

    return (
        <Container>
            <SEO title="Playlists" />

            <PageTitle>Playlists</PageTitle>
            <Playlists playlists={playlists} />
        </Container>
    )
}

export default PlaylistsPage
