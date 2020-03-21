import React from "react"
import {useEpisodes} from "../hooks"
import Container from "../styles/Container"
import Episodes from "../components/Episodes/Episodes"
import {Meta, Twitter, Facebook} from "../components/SEO"

const EpisodesPage = () => {
    const episodes = useEpisodes({limit: 5})

    return (
        <Container>
            <Meta title="Episodes" />
            <Facebook />
            <Twitter />

            <h1>episodes</h1>
            <Episodes episodes={episodes} />
        </Container>
    )
}

export default EpisodesPage
