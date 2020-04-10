import React from "react"
import {useAbout} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import About from "../components/About/About"

const AboutPage = () => {
    const sections = useAbout()

    return (
        <Container>
            <SEO title="About" />
            <About sections={sections} />
        </Container>
    )
}

export default AboutPage
