import React from "react"
import PropTypes from "prop-types"
import {useAbout} from "../hooks"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"

const AboutPage = ({uri}) => {
    const {html} = useAbout()

    return (
        <Container>
            <SEO
                path={uri}
                title="About"
                description="Why I know my shit about Texas country music."
            />

            <div dangerouslySetInnerHTML={{__html: html}} />
        </Container>
    )
}

AboutPage.propTypes = {
    uri: PropTypes.string.isRequired,
}

export default AboutPage
