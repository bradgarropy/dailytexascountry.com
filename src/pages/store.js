import React from "react"
import Container from "../styles/Container"
import {Meta, Twitter, Facebook} from "../components/SEO"

const StorePage = () => {
    return (
        <Container>
            <Meta title="Store" />
            <Facebook />
            <Twitter />

            <h1>store</h1>
        </Container>
    )
}

export default StorePage
