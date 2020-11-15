import Img from "gatsby-image"
import Title from "styles/Title"
import PropTypes from "prop-types"
import styled from "styled-components"
import YouTube from "components/YouTube"

const StyledAbout = styled.div`
    display: grid;
    grid-gap: 5rem;
`

const AboutSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "text image";
    grid-gap: 5rem;
    align-items: center;

    &:nth-child(even) {
        grid-template-areas: "image text";
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
        grid-gap: 1rem;

        &:nth-child(n) {
            grid-template-areas:
                "image"
                "text";
        }
    }
`

const Image = styled(Img)`
    width: 100%;
    height: auto;
    border-radius: 0.25rem;
    grid-area: image;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const Description = styled.div`
    line-height: 1.75;

    a {
        transition: all 300ms ease 0s;
        box-shadow: ${({theme}) => theme.colors.red} 0 -0.1rem inset;
    }

    a:hover {
        text-decoration: none;
        color: ${({theme}) => theme.colors.white};
        box-shadow: ${({theme}) => theme.colors.red} 0 -2rem 0 inset;
        padding: 0 0.2rem;
        margin: 0 -0.2rem;
    }
`

const Summary = styled(Description)`
    justify-self: center;
    text-align: center;
    max-width: ${({theme}) => theme.breakpoints.mobile};
    font-size: 1.25rem;
    font-family: "Patua One", sans-serif;
`

const About = ({sections}) => {
    return (
        <StyledAbout>
            {sections.map((section, index) => {
                const {html, frontmatter} = section
                const {title} = frontmatter
                const {fluid} = frontmatter.image.childImageSharp

                return (
                    <AboutSection key={index}>
                        <Image fluid={fluid} />

                        <div>
                            <Title>{title}</Title>
                            <Description
                                dangerouslySetInnerHTML={{__html: html}}
                            />
                        </div>
                    </AboutSection>
                )
            })}

            <Summary>
                I&apos;ve been around the Texas country scene for over 10 years
                now, and every bit of that experience is built into Daily Texas
                Country. If you enjoy the Lone Star State music and lifestyle as
                much as I do, you belong here. And if you know all of the songs
                I referenced in the sections above, you <em>really</em> belong
                here.
            </Summary>

            <YouTube id="QnwQb2-8yzE" />
        </StyledAbout>
    )
}

About.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default About
