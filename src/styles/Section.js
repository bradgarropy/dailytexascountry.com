import styled from "styled-components"

const Section = styled.section`
    color: ${({theme, color}) =>
        color === "white" ? theme.colors.black : theme.colors.white};
    background: ${({theme, color}) => theme.colors[color]};
    min-height: 50vh;
    padding: 3rem 4rem;
    display: grid;
    align-content: center;

    *::selection {
        background: ${({theme, color}) =>
            color === "red" && theme.colors.blueSelection};
    }

    img::selection {
        background: ${({theme, color}) =>
            color === "red" && theme.colors.blueSelectionImage};
    }
`

export default Section
