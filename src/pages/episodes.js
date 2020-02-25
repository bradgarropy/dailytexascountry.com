import React from "react"
import {useEpisodes} from "../hooks"
import {Meta, Twitter, Facebook} from "../components/SEO"

const EpisodesPage = () => {
    const episodes = useEpisodes()

    return (
        <>
            <Meta title="episodes" />
            <Facebook />
            <Twitter />

            <h1>episodes</h1>

            <ul>
                {episodes.map((episode, index) => {
                    const {videoId, title} = episode

                    return (
                        <li key={index}>
                            <a href={`https://youtube.com/watch?v=${videoId}`}>
                                {title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default EpisodesPage
