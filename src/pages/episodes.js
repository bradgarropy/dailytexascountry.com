import React from "react"
import {useEpisodes} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Episodes from "../components/Episodes/Episodes"

const EpisodesPage = () => {
    const episodes = useEpisodes()

    return (
        <Container>
            <SEO title="Episodes" />

            <h1>Episodes</h1>
            <Episodes episodes={episodes} />
        </Container>
    )
}

export default EpisodesPage
