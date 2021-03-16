import SEO from "@bradgarropy/gatsby-plugin-seo"
import About from "components/About"
import {useAbout} from "hooks"
import Container from "styles/Container"

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
