import styled from "styled-components"

const Container = styled.div`
    display: grid;
    padding: 2rem 2rem 6rem 2rem;
    justify-content: ${({centered}) => (centered ? "center" : "stretch")};
    align-content: ${({middle}) => (middle ? "center" : "start")};
    height: 100%;
`

export default Container
