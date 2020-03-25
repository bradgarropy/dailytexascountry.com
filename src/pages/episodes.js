import React from "react"
import PropTypes from "prop-types"
import {useEpisodes} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import Episodes from "../components/Episodes/Episodes"

const EpisodesPage = ({uri}) => {
    const episodes = useEpisodes({limit: 5})

    return (
        <Container>
            <SEO path={uri} title="Episodes" />

            <h1>episodes</h1>
            <Episodes episodes={episodes} />
        </Container>
    )
}

EpisodesPage.propTypes = {
    uri: PropTypes.string.isRequired,
}

export default EpisodesPage
