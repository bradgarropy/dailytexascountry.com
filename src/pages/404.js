import React from "react"
import PropTypes from "prop-types"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"

const NotFoundPage = ({uri}) => {
    return (
        <Container>
            <SEO path={uri} title="404" />

            <h1>Ya&apos;ll go to hell, and I&apos;ll go to Texas.</h1>
            <h1>- Davy Crockett</h1>
        </Container>
    )
}

NotFoundPage.propTypes = {
    uri: PropTypes.string.isRequired,
}

export default NotFoundPage
