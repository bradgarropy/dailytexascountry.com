import SEO from "@bradgarropy/gatsby-plugin-seo"
import {Helmet} from "react-helmet"
import Container from "styles/Container"

const StorePage = () => {
    const store = "https://cottonbureau.com/people/daily-texas-country"

    return (
        <Container>
            <SEO title="Store" />

            <Helmet>
                <meta httpEquiv="refresh" content={`0;url=${store}`} />
            </Helmet>
        </Container>
    )
}

export default StorePage
