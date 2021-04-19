import Link from "@bradgarropy/gatsby-link"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import FeaturedPlaylist from "components/FeaturedPlaylist"
import FeaturedPosts from "components/FeaturedPosts"
import YouTube from "components/YouTube"
import {useEpisode, usePlaylist, usePosts} from "hooks"
import styled from "styled-components"
import Section from "styles/Section"

const MoreButton = styled(Link)`
    font-family: "Patua One", sans-serif;
    justify-self: end;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    color: ${({theme, secondary}) =>
        secondary ? theme.colors.white : theme.colors.red};
    background: ${({theme, secondary}) =>
        secondary ? theme.colors.red : theme.colors.white};
`

const PostsSection = styled.div`
    display: grid;
    gap: 2rem;
    justify-self: center;
    width: 100%;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        max-width: 37.5rem;
    }
`

const EpisodesSection = styled.div`
    justify-self: center;
    display: grid;
    gap: 2rem;
    width: 100%;
    max-width: ${({theme}) => theme.breakpoints.mobile};
`

const PlaylistsSection = styled.div`
    display: grid;
    gap: 2rem;
    justify-self: center;
    width: 100%;
    max-width: 60rem;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        max-width: 37.5rem;
    }
`

const IndexPage = () => {
    const posts = usePosts({limit: 3})
    const episode = useEpisode()
    const playlist = usePlaylist({name: "Daily Texas Country"})

    return (
        <>
            <SEO />

            <Section color="white">
                <PostsSection>
                    <h1>Latest Posts</h1>
                    <FeaturedPosts posts={posts} />
                    <MoreButton to="/posts" secondary="true">
                        READ MORE
                    </MoreButton>
                </PostsSection>
            </Section>

            <Section color="red">
                <EpisodesSection>
                    <h1>Episodes</h1>
                    <YouTube id={episode.videoId} />
                    <MoreButton to="/episodes">WATCH MORE</MoreButton>
                </EpisodesSection>
            </Section>

            <Section color="white">
                <PlaylistsSection>
                    <FeaturedPlaylist playlist={playlist} />
                    <MoreButton to="/playlists" secondary="true">
                        HEAR MORE
                    </MoreButton>
                </PlaylistsSection>
            </Section>
        </>
    )
}

export default IndexPage
