import React from "react"
import PropTypes from "prop-types"
import {usePlaylists} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Playlists from "../components/Playlists/Playlists"

const PlaylistsPage = ({uri}) => {
    const playlists = usePlaylists()

    return (
        <Container>
            <SEO path={uri} title="Playlists" />

            <h1>playlists</h1>
            <Playlists playlists={playlists} />
        </Container>
    )
}

PlaylistsPage.propTypes = {
    uri: PropTypes.string.isRequired,
}

export default PlaylistsPage
