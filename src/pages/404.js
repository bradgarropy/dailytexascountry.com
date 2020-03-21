import React from "react"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const NotFoundPage = () => {
    return (
        <Container>
            <Meta title="404" />
            <Facebook />
            <Twitter />

            <h1>Ya&apos;ll go to hell, and I&apos;ll go to Texas.</h1>
            <h1>- Davy Crockett</h1>
        </Container>
    )
}

export default NotFoundPage
