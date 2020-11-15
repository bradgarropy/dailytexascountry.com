import {useAbout} from "hooks"
import About from "components/About"
import Container from "styles/Container"
import SEO from "@bradgarropy/gatsby-plugin-seo"

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
