import styled from "styled-components"

const PostBody = styled.div`
    line-height: 1.75;
    font-size: 1.1rem;

    p:first-of-type {
        margin-top: 0;
    }

    table {
        margin: 2rem auto !important;
        border-radius: 0.25rem;
        padding: 0.5rem;
        border-collapse: collapse;
    }

    thead tr {
        border-bottom: 0.2rem solid ${({theme}) => theme.colors.blue};
    }

    th {
        font-family: "Patua One", sans-serif;
        font-weight: normal;
        font-size: 1.25rem;
    }

    td {
        font-size: 1rem;
    }

    th:not(:last-child),
    td:not(:last-child) {
        padding: 0 1rem 0 0;
    }

    th:last-child,
    tr:last-child {
        padding: 0;
    }

    a:not(.anchor) {
        transition: all 300ms ease 0s;
        box-shadow: ${({theme}) => theme.colors.red} 0 -0.1rem inset;
    }

    a:not(.anchor):hover {
        text-decoration: none;
        color: ${({theme}) => theme.colors.white};
        box-shadow: ${({theme}) => theme.colors.red} 0 -2rem 0 inset;
        padding: 0 0.2rem;
        margin: 0 -0.2rem;
    }
`

export default PostBody
