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

const About = () => {
    return (
        <StyledAbout>
            <AboutSection>
                <Image src={Farm} />

                <div>
                    <Title>My Hometown</Title>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor suscipit atque esse hic consequatur dolores.
                        Maiores, quam? Rerum debitis optio omnis fuga id eum
                        iusto autem impedit in, minus asperiores?
                    </p>
                </div>
            </AboutSection>

            <AboutSection>
                <Image src={Bar} />

                <div>
                    <Title>Some Ol&apos; Bar In The 90&apos;s</Title>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor suscipit atque esse hic consequatur dolores.
                        Maiores, quam? Rerum debitis optio omnis fuga id eum
                        iusto autem impedit in, minus asperiores?
                    </p>
                </div>
            </AboutSection>

            <AboutSection>
                <Image src={Concert} />

                <div>
                    <Title>Front Seat Show</Title>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor suscipit atque esse hic consequatur dolores.
                        Maiores, quam? Rerum debitis optio omnis fuga id eum
                        iusto autem impedit in, minus asperiores?
                    </p>
                </div>
            </AboutSection>

            <AboutSection>
                <Image src={Dancing} />

                <div>
                    <Title>Take Me Out To A Dancehall</Title>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor suscipit atque esse hic consequatur dolores.
                        Maiores, quam? Rerum debitis optio omnis fuga id eum
                        iusto autem impedit in, minus asperiores?
                    </p>
                </div>
            </AboutSection>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                quaerat quis dolores eaque excepturi dignissimos doloribus ullam
                nulla laudantium consectetur iure, ut repudiandae modi alias.
                Accusantium nesciunt voluptatum impedit aut?Molestias explicabo
                tenetur unde dolor! Officia magni, commodi nostrum reprehenderit
                ea labore. Dicta, qui? Delectus vero dolorum consequuntur iste
                recusandae quaerat dignissimos, facere officia, ab, eos magnam
                soluta officiis. Eius?
            </p>
        </StyledAbout>
    )
}

export default About
