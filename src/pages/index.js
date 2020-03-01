import React from "react"
import {Link} from "gatsby"
import Section from "../styles/Section"
import Posts from "../components/Posts"
import YouTube from "../components/YouTube"
import Playlists from "../components/Playlists"
import {Meta, Twitter, Facebook} from "../components/SEO"
import {usePosts, useEpisode, usePlaylist} from "../hooks"

const IndexPage = () => {
    const posts = usePosts({limit: 3})
    const episode = useEpisode()
    const playlist = usePlaylist({name: "Daily Texas Country"})

    return (
        <>
            <Meta title="DTXC" />
            <Facebook />
            <Twitter />

            <Section color="white">
                <h1>blog</h1>
                <Posts posts={posts} />
                <Link to="/blog">see more</Link>
            </Section>

            <Section color="red">
                <h1>episodes</h1>
                <YouTube id={episode.videoId} />
                <Link to="/episodes">see more</Link>
            </Section>

            <Section color="white">
                <h1>store</h1>
            </Section>

            <Section color="red">
                <h1>playlists</h1>
                <Playlists playlists={[playlist]} />
                <Link to="/playlists">see more</Link>
            </Section>
        </>
    )
}

export default IndexPage
