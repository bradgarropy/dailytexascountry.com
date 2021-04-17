import Link from "@bradgarropy/gatsby-link"
import styled from "styled-components"

const fontSize = size => {
    switch (size) {
        case "S":
            return "0.8rem"

        case "M":
            return "1rem"

        case "L":
            return "1.2rem"

        default:
            return "1rem"
    }
}

const padding = size => {
    switch (size) {
        case "S":
            return "0.2rem 0.4rem"

        case "M":
            return "0.3rem 0.8rem"

        case "L":
            return "0.3rem 1.2rem"

        default:
            return "0.3rem 0.8rem"
    }
}

const Tag = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.red};
    padding: ${({size}) => padding(size)};
    font-size: ${({size}) => fontSize(size)};
    border-radius: 0.25rem;
`

export default Tag
