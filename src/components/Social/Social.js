import {useSiteMetadata} from "hooks"
import styled from "styled-components"
import Twitter from "svg/twitter.svg"
import YouTube from "svg/youtube.svg"
import Spotify from "svg/spotify.svg"
import Instagram from "svg/instagram.svg"

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
    const {twitter, youtube, instagram, spotify} = useSiteMetadata()

    return (
        <StyledSocial>
            <a
                aria-label="Twitter"
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledTwitter />
            </a>

            <a
                aria-label="YouTube"
                href={`https://youtube.com/channel/${youtube}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledYouTube />
            </a>

            <a
                aria-label="Instagram"
                href={`https://instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledInstagram />
            </a>

            <a
                aria-label="Spotify"
                href={`https://open.spotify.com/user/${spotify}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledSpotify />
            </a>
        </StyledSocial>
    )
}

export default Social
