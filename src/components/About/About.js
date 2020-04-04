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
    font-size: 1.25rem;
    font-family: "Patua One";
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
                        Texas and other states. Along the way I&apos;ve met many
                        artists and musicians,{" "}
                        <a
                            href="https://youtu.be/fZenUaPL0i8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Zane Williams
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://instagram.com/p/BeJOF7uFcjw"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Casey Donahew
                        </a>{" "}
                        even announced both of our pregnancies!
                    </Description>
                </div>
            </AboutSection>

            <AboutSection>
                <Image src={Dancing} />

                <div>
                    <Title>Take Me Out To A Dancehall</Title>

                    <Description>
                        Dancing has been an obsession since I first stepped foot
                        into Midnight Rodeo years ago. One step, two step, half
                        step, I love it all. I met my{" "}
                        <a
                            href="https://instagram.com/p/B5CJS9kAy2u"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            wife
                        </a>{" "}
                        at a country bar when she asked me for a dance! We found
                        our home at{" "}
                        <a
                            href="http://north.mavericksdancehall.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Maverick&apos;s Dance Hall
                        </a>{" "}
                        in Austin and met the whole crew there.
                    </Description>
                </div>
            </AboutSection>

            <Summary>
                I&apos;ve been around the Texas country scene for over 10 years
                now, and every bit of that experience is built into Daily Texas
                Country. If you enjoy the lonestar state&apos;s music and
                lifestyle as much as I do, you belong here. And if you know all
                of the songs I referenced in the sections above, you{" "}
                <i>really</i> belong here.
            </Summary>
        </StyledAbout>
    )
}

export default About
