import React from "react"
import {useEpisodes} from "../hooks"
import Container from "../styles/Container"
import Episodes from "../components/Episodes"
import {Meta, Twitter, Facebook} from "../components/SEO"

const EpisodesPage = () => {
    const episodes = useEpisodes()

    return (
        <Container>
            <Meta title="episodes" />
            <Facebook />
            <Twitter />

            <Episodes episodes={episodes} />
        </Container>
    )
}

export default EpisodesPage
