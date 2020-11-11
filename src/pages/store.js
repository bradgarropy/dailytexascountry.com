import React from "react"
import {Helmet} from "react-helmet"
import Container from "styles/Container"
import SEO from "@bradgarropy/gatsby-plugin-seo"

const StorePage = () => {
    const store = "https://cottonbureau.com/people/daily-texas-country"

    return (
        <Container>
            <SEO title="Store" />

            <Helmet>
                <meta http-equiv="refresh" content={`0;url=${store}`} />
            </Helmet>
        </Container>
    )
}

export default StorePage
