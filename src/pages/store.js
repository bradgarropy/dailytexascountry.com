import React from "react"
import PropTypes from "prop-types"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"

const StorePage = ({uri}) => {
    return (
        <Container>
            <SEO path={uri} title="Store" />

            <h1>store</h1>
        </Container>
    )
}

StorePage.propTypes = {
    uri: PropTypes.string.isRequired,
}

export default StorePage
