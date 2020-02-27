import React from "react"
import PropType from "prop-types"

const Episodes = ({episodes}) => {
    return (
        <>
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
        </>
    )
}

Episodes.propTypes = {
    episodes: PropType.arrayOf(PropType.object).isRequired,
}

export default Episodes
