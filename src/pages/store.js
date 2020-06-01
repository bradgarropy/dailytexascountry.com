import Img from "gatsby-image"
import {navigate} from "gatsby"
import React, {useState} from "react"
import styled from "styled-components"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import {useStore} from "../hooks"
import {post} from "../utils/fetch"
import Container from "../styles/Container"
import {STORE_NOTIFICATIONS} from "../utils/convertkit"

const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 46.875rem;
    margin-top: 2rem;
    box-sizing: content-box;
    line-height: 1.5;

    @media (max-width: 40.625rem) {
        grid-template-columns: 1fr;
        max-width: 30rem;
    }
`

const Image = styled(Img)`
    border-radius: 0.25rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const Right = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
    padding: 2rem;
    gap: 1rem;
    align-content: center;
`

const Form = styled.form`
    display: grid;
    gap: 0.5rem;
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

    ::placeholder {
        color: ${({theme}) => theme.colors.grey};
    }
`

const Button = styled.button`
    font-family: "Patua One", sans-serif;
    justify-self: end;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1.1rem;
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
    const store = useStore()
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const {html} = store
    const {fluid} = store.frontmatter.image.childImageSharp

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
        <Container centered middle>
            <SEO title="Store" />

            <h1>Store</h1>

            <Box>
                <Image fluid={fluid} />

                <Right>
                    <div dangerouslySetInnerHTML={{__html: html}} />

                    <Form onSubmit={onSubmit}>
                        <Input
                            aria-label="email"
                            placeholder="george@strait.com"
                            type="email"
                            value={email}
                            onChange={onChange}
                            required
                        />

                        <Button disabled={loading}>NOTIFY ME</Button>
                    </Form>
                </Right>
            </Box>
        </Container>
    )
}

export default StorePage
