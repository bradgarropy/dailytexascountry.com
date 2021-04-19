import Link from "@bradgarropy/gatsby-link"
import {useSiteMetadata} from "hooks"
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
    const {twitter, youtube, instagram, spotify} = useSiteMetadata()

    return (
        <StyledSocial>
            <Link aria-label="Twitter" to={`https://twitter.com/${twitter}`}>
                <StyledTwitter />
            </Link>

            <Link
                aria-label="YouTube"
                to={`https://youtube.com/channel/${youtube}`}
            >
                <StyledYouTube />
            </Link>

            <Link
                aria-label="Instagram"
                to={`https://instagram.com/${instagram}`}
            >
                <StyledInstagram />
            </Link>

            <Link
                aria-label="Spotify"
                to={`https://open.spotify.com/user/${spotify}`}
            >
                <StyledSpotify />
            </Link>
        </StyledSocial>
    )
}

export default Social
