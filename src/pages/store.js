import React, {useState} from "react"
import styled from "styled-components"
import {post} from "../utils/fetch"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"
import {STORE_NOTIFICATIONS} from "../utils/convertkit"
import {navigate} from "gatsby"

const Item = styled.li`
    list-style: none;
`

const Form = styled.form`
    display: grid;
    gap: 0.5rem;
    margin-top: 1rem;
    width: 100%;
    max-width: 21.875rem;
    justify-self: center;
`

const Input = styled.input`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    display: block;
    border: 2px solid ${({theme}) => theme.colors.black};
    font-size: 1.1rem;
    line-height: 1.5;
`

const Button = styled.button`
    font-family: "Patua One";
    justify-self: end;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.red};
    border: 2px solid ${({theme}) => theme.colors.red};
    cursor: pointer;
    width: 100%;
    line-height: 1.5;

    &:disabled {
        cursor: default;
    }
`

const StorePage = () => {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const onChange = event => setEmail(event.target.value)

    const onSubmit = async event => {
        event.preventDefault()

        const data = {
            email,
            tags: [STORE_NOTIFICATIONS],
        }

        setLoading(true)
        const {ok} = await post("/api/subscribe", data)
        setLoading(false)

        if (ok) {
            navigate("/thanks")
        }
    }

    return (
        <Container>
            <SEO title="Store" />

            <h1>Store</h1>

            <p>
                We don&apos;t have anything for you yet, but we&apos;re in the
                process of creating some great stuff!
            </p>

            <ul>
                <Item>Hats</Item>
                <Item>Shirts</Item>
                <Item>Koozies</Item>
                <Item>Stickers</Item>
            </ul>

            <p>
                Sign up and we&apos;ll send you an email once the store is ready
                to go.
            </p>

            <Form onSubmit={onSubmit}>
                <Input type="email" value={email} onChange={onChange} />
                <Button disabled={loading}>NOTIFY ME</Button>
            </Form>
        </Container>
    )
}

export default StorePage
