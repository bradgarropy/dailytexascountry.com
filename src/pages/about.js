import React from "react"
import {useAbout} from "../hooks"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const AboutPage = () => {
    const {html} = useAbout()

    return (
        <Container>
            <Meta title="About" />

            <Facebook
                title="About"
                description="Why I know my shit about Texas country music."
            />

            <Twitter
                title="About"
                description="Why I know my shit about Texas country music."
            />

            <div dangerouslySetInnerHTML={{__html: html}} />
        </Container>
    )
}

export default AboutPage
