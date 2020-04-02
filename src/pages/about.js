import React from "react"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import About from "../components/About/About"

const AboutPage = () => {
    return (
        <Container>
            <SEO title="About" />
            <About />
        </Container>
    )
}

export default AboutPage
