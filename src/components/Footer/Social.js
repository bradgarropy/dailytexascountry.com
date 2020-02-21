import React from "react"
import styled from "styled-components"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Twitter from "../../svg/twitter.svg"
import YouTube from "../../svg/youtube.svg"
import Instagram from "../../svg/instagram.svg"

const StyledSocial = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    gap: 1rem;
`

const StyledTwitter = styled(Twitter)`
    max-height: 1.5rem;
    width: auto;
`

const StyledYouTube = styled(YouTube)`
    max-height: 1.5rem;
    width: auto;
`

const StyledInstagram = styled(Instagram)`
    max-height: 1.5rem;
    width: auto;
`

const Social = () => {
    const {twitter, youtube, instagram} = useSiteMetadata()

    return (
        <StyledSocial>
            <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledTwitter />
            </a>

            <a
                href={`https://youtube.com/channel/${youtube}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledYouTube />
            </a>

            <a
                href={`https://instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledInstagram />
            </a>
        </StyledSocial>
    )
}

export default Social
