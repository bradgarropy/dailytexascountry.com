import React from "react"
import {useAbout} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"

const AboutPage = () => {
    const {html} = useAbout()

    return (
        <Container>
            <SEO
                title="About"
                description="Why I know my shit about Texas country music."
            />

            <div dangerouslySetInnerHTML={{__html: html}} />
        </Container>
    )
}

export default AboutPage
