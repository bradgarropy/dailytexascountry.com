import {GatsbyImage} from "gatsby-plugin-image"
import styled from "styled-components"

const Image = styled(GatsbyImage)`
    transition: all 300ms;
    border-radius: 0.25rem;

    :hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        transform: translateY(-5px);
    }
`

export default Image
