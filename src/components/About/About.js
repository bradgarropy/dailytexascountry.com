import React from "react"
import styled from "styled-components"
import Title from "../../styles/Title"
import Bar from "../../images/bar.jpg"
import Farm from "../../images/farm.jpg"
import Concert from "../../images/concert.jpg"
import Dancing from "../../images/dancing.jpg"

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

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.25rem;
    grid-area: image;
`

const Description = styled.p`
    line-height: 1.75;
`

const Summary = styled(Description)`
    justify-self: center;
    text-align: center;
    max-width: ${({theme}) => theme.breakpoints.mobile};
`

const About = () => {
    return (
        <StyledAbout>
            <AboutSection>
                <Image src={Farm} />

                <div>
                    <Title>My Hometown</Title>

                    <Description>
                        I grew up on dairy farm in upstate New York. I was
                        always riding around in my grandpa&apos;s red Chevy
                        Silverado or a John Deere tractor with country music
                        playing on the radio. If that doesn&apos;t sound like a
                        country song I don&apos;t know what does! My earliest
                        memories of country music were George Strait, Alan
                        Jackson, Garth Brooks, Brooks & Dunn, Billy Ray Cyrus,
                        and Shania Twain.
                    </Description>
                </div>
            </AboutSection>

            <AboutSection>
                <Image src={Bar} />

                <div>
                    <Title>Some Ol&apos; Bar In The 90&apos;s</Title>

                    <Description>
                        My family owned a bar in town with a pool table, a
                        jukebox, and grandma&apos;s home cooking (rest in
                        peace). Alcohol would flow at family gatherings where my
                        uncles taught me the meaning of rowdy. Although I was
                        young, I&apos;d still get behind the bar and sling
                        drinks!
                    </Description>
                </div>
            </AboutSection>

            <AboutSection>
                <Image src={Concert} />

                <div>
                    <Title>Front Seat Show</Title>

                    <Description>
                        Country music grabbed hold of me and never let go.
                        I&apos;ve been to probably a hundred shows now all over
                        Texas and even some in Colorado.
                    </Description>
                </div>
            </AboutSection>

            <AboutSection>
                <Image src={Dancing} />

                <div>
                    <Title>Take Me Out To A Dancehall</Title>

                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor suscipit atque esse hic consequatur dolores.
                        Maiores, quam? Rerum debitis optio omnis fuga id eum
                        iusto autem impedit in, minus asperiores?
                    </Description>
                </div>
            </AboutSection>

            <Summary>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                quaerat quis dolores eaque excepturi dignissimos doloribus ullam
                nulla laudantium consectetur iure, ut repudiandae modi alias.
                Accusantium nesciunt voluptatum impedit aut?Molestias explicabo
                tenetur unde dolor! Officia magni, commodi nostrum reprehenderit
                ea labore. Dicta, qui? Delectus vero dolorum consequuntur iste
                recusandae quaerat dignissimos, facere officia, ab, eos magnam
                soluta officiis. Eius?
            </Summary>
        </StyledAbout>
    )
}

export default About
