import React from "react"
import {Link} from "gatsby"
import Section from "../styles/Section"
import Posts from "../components/Posts"
import Episodes from "../components/Episodes"
import Playlists from "../components/Playlists"
import {Meta, Twitter, Facebook} from "../components/SEO"
import {usePosts, useEpisodes, usePlaylists} from "../hooks"

const IndexPage = () => {
    const posts = usePosts({limit: 3})
    const episodes = useEpisodes({limit: 1})
    const playlists = usePlaylists({name: "Daily Texas Country"})

    return (
        <>
            <Meta title="DTXC" />
            <Facebook />
            <Twitter />

            <Section color="white">
                <Posts posts={posts} />
                <Link to="/blog">see more</Link>
            </Section>

            <Section color="red">
                <Episodes episodes={episodes} />
                <Link to="/episodes">see more</Link>
            </Section>

            <Section color="white">
                <h1>store</h1>
            </Section>

            <Section color="red">
                <Playlists playlists={playlists} />
                <Link to="/playlists">see more</Link>
            </Section>
        </>
    )
}

export default IndexPage
