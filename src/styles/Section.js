import styled from "styled-components"

const Section = styled.section`
    color: ${({theme, color}) =>
        color === "white" ? theme.colors.black : theme.colors.white};
    background: ${({theme, color}) => theme.colors[color]};
    min-height: 50vh;
    padding: 2rem;
    display: grid;
    align-content: center;
`

export default Section
