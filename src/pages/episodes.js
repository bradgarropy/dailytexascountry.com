import React from "react"
import {useEpisodes} from "hooks"
import styled from "styled-components"
import Container from "styles/Container"
import Episodes from "components/Episodes"
import SEO from "@bradgarropy/gatsby-plugin-seo"

const StyledEpisodesPage = styled.div`
    display: grid;
    gap: 2rem;
    justify-self: center;
    width: 100%;
    max-width: 37.5rem;
`

const EpisodesPage = () => {
    const episodes = useEpisodes()

    return (
        <Container>
            <SEO title="Episodes" />

            <StyledEpisodesPage>
                <h1>Episodes</h1>
                <Episodes episodes={episodes} />
            </StyledEpisodesPage>
        </Container>
    )
}

export default EpisodesPage
