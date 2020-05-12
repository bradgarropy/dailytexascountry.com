import React from "react"
import styled from "styled-components"
import {usePlaylists} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Playlists from "../components/Playlists/Playlists"

const StyledPlaylistsPage = styled.div`
    display: grid;
    gap: 2rem;
    justify-self: center;
    width: 100%;
    max-width: 37.5rem;
`

const PlaylistsPage = () => {
    const playlists = usePlaylists()

    return (
        <Container>
            <SEO title="Playlists" />

            <StyledPlaylistsPage>
                <h1>Playlists</h1>
                <Playlists playlists={playlists} />
            </StyledPlaylistsPage>
        </Container>
    )
}

export default PlaylistsPage
