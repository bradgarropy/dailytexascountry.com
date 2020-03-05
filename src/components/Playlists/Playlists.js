import React from "react"
import PropType from "prop-types"
import styled from "styled-components"
import Image from "../../styles/Image"

const StyledPlaylists = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

const Playlists = ({playlists}) => {
    return (
        <StyledPlaylists>
            {playlists.map((playlist, index) => {
                const {name, description} = playlist
                const url = playlist.external_urls.spotify
                const image = playlist.image.localFile.childImageSharp.fluid

                return (
                    <article key={index}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <Image fluid={image} />
                        </a>

                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <p>{name}</p>
                        </a>

                        <p>{description}</p>
                    </article>
                )
            })}
        </StyledPlaylists>
    )
}

Playlists.propTypes = {
    playlists: PropType.arrayOf(PropType.object).isRequired,
}

export default Playlists
