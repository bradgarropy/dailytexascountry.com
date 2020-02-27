import React from "react"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const NotFoundPage = () => {
    return (
        <Container>
            <Meta title="not found" />
            <Facebook />
            <Twitter />

            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
        </Container>
    )
}

export default NotFoundPage
