import React from "react"
import styled from "styled-components"
import {Meta, Twitter, Facebook} from "../components/SEO"

const Section = styled.div`
    color: ${({theme, color}) =>
        color === "white" ? theme.colors.black : theme.colors.white};
    background: ${({theme, color}) => theme.colors[color]};
    min-height: 50vh;
    padding: 2rem;
`

const IndexPage = () => {
    return (
        <>
            <Meta title="DTXC" />
            <Facebook />
            <Twitter />

            <Section color="white">section</Section>
            <Section color="red">section</Section>
            <Section color="white">section</Section>
            <Section color="red">section</Section>
        </>
    )
}

export default IndexPage
