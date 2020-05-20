import React from "react"
import styled from "styled-components"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"

const Thanks = styled.h2`
    background: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.white};
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 4px;
`

const ThanksPage = () => {
    return (
        <Container centered middle>
            <SEO title="Thanks" />

            <Thanks>Thanks!</Thanks>

            <div>
                <p>
                    Please check your email inbox to confirm it&apos;s really
                    you.
                </p>

                <p>
                    Then we&apos;ll let you know when the store is ready to go!
                </p>
            </div>
        </Container>
    )
}

export default ThanksPage
