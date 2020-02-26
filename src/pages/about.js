import React from "react"
import {useAbout} from "../hooks"
import {Meta, Twitter, Facebook} from "../components/SEO"

const AboutPage = () => {
    const {html} = useAbout()

    return (
        <>
            <Meta title="about" />
            <Facebook />
            <Twitter />

            <div dangerouslySetInnerHTML={{__html: html}} />
        </>
    )
}

export default AboutPage
