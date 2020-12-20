import SEO from "@bradgarropy/gatsby-plugin-seo"
import Playlists from "components/Playlists"
import {usePlaylists} from "hooks"
import styled from "styled-components"
import Container from "styles/Container"

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
        <Container centered>
            <SEO title="Playlists" />

            <StyledPlaylistsPage>
                <h1>Playlists</h1>
                <Playlists playlists={playlists} />
            </StyledPlaylistsPage>
        </Container>
    )
}

export default PlaylistsPage
