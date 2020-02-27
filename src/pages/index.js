import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {Meta, Twitter, Facebook} from "../components/SEO"
import {usePosts, useEpisodes, usePlaylists} from "../hooks"

const Section = styled.div`
    color: ${({theme, color}) =>
        color === "white" ? theme.colors.black : theme.colors.white};
    background: ${({theme, color}) => theme.colors[color]};
    min-height: 50vh;
    padding: 2rem;
`

const IndexPage = () => {
    const posts = usePosts({limit: 3})
    const episodes = useEpisodes({limit: 1})
    const playlists = usePlaylists({limit: 1})

    return (
        <>
            <Meta title="DTXC" />
            <Facebook />
            <Twitter />

            <Section color="white">
                <h1>blog</h1>

                <ul>
                    {posts.map((post, index) => {
                        const {relativeDirectory} = post

                        return (
                            <li key={index}>
                                <Link to={`/blog/${relativeDirectory}`}>
                                    {relativeDirectory}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <Link to="/blog">see more</Link>
            </Section>

            <Section color="red">
                <h1>episodes</h1>

                <ul>
                    {episodes.map((episode, index) => {
                        const {videoId, title} = episode

                        return (
                            <li key={index}>
                                <a
                                    href={`https://youtube.com/watch?v=${videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <Link to="/episodes">see more</Link>
            </Section>

            <Section color="white">
                <h1>store</h1>
            </Section>

            <Section color="red">
                <h1>playlists</h1>

                <ul>
                    {playlists.map((playlist, index) => {
                        const {name} = playlist
                        const url = playlist.external_urls.spotify

                        return (
                            <li key={index}>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {name}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <Link to="/playlists">see more</Link>
            </Section>
        </>
    )
}

export default IndexPage
