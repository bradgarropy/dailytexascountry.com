import styled from "styled-components"
import Container from "./Container"

const Section = styled(Container)`
    color: ${({theme, color}) =>
        color === "white" ? theme.colors.black : theme.colors.white};
    background: ${({theme, color}) => theme.colors[color]};
    min-height: 50vh;
`

export default Section
