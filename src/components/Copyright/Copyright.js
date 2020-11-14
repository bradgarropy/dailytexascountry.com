import React from "react"
import copyright from "copyright"
import {useSiteMetadata} from "hooks"
import styled from "styled-components"

const StyledCopyright = styled.p`
    font-size: 0.9rem;
    grid-column: 1 / span 3;
    margin: 0;
`

const Copyright = () => {
    const {title} = useSiteMetadata()

    const options = {
        name: title,
        short: true,
    }

    return <StyledCopyright>{copyright(options)}</StyledCopyright>
}

export default Copyright
