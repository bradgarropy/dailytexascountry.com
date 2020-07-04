import React from "react"
import styled from "styled-components"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import {usePosts} from "../hooks"
import Oklahoma from "../svg/oklahoma.svg"
import Container from "../styles/Container"
import Post from "../components/Posts/Post"

const FourOhFour = styled.div`
    max-width: 37.5rem;

    h1 {
        text-align: center;
    }

    svg {
        width: 100%;
        margin: 2rem 0 8rem 0;
    }
`

const CTA = styled.div`
    margin-bottom: 2rem;
`

const NotFoundPage = () => {
    const [post] = usePosts({limit: 1})

    return (
        <Container centered middle>
            <SEO title="404" />

            <FourOhFour>
                <h1>
                    Oklahoma?!
                    <br />
                    How in the hell did you end up here?
                </h1>

                <Oklahoma />

                <CTA>
                    <h1>Let&apos;s send you back home to Texas.</h1>
                    <h1>Check out our latest post.</h1>
                </CTA>

                <Post post={post} />
            </FourOhFour>
        </Container>
    )
}

export default NotFoundPage
