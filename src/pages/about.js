import React from "react"
import {useAbout} from "hooks"
import Container from "styles/Container"
import About from "components/About/About"
import SEO from "@bradgarropy/gatsby-plugin-seo"

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
