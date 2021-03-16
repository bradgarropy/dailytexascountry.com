import styled from "styled-components"
import Instagram from "svg/instagram.svg"
import Spotify from "svg/spotify.svg"
import Twitter from "svg/twitter.svg"
import YouTube from "svg/youtube.svg"

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

const StyledSpotify = styled(Spotify)`
    max-height: 1.5rem;
    width: auto;
`

const Social = () => {
    return (
        <StyledSocial>
            <a
                aria-label="Twitter"
                href="/twitter"
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledTwitter />
            </a>

            <a
                aria-label="YouTube"
                href="/youtube"
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledYouTube />
            </a>

            <a
                aria-label="Instagram"
                href="/instagram"
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledInstagram />
            </a>

            <a
                aria-label="Spotify"
                href="/spotify"
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledSpotify />
            </a>
        </StyledSocial>
    )
}

export default Social
