import styled from "styled-components"

const Post = styled.article`
    display: grid;
    max-width: ${({theme}) => theme.breakpoints.mobile};
    justify-self: center;
    gap: 2rem;
`

export default Post
