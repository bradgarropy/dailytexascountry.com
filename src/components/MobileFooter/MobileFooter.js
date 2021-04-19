import Link from "@bradgarropy/gatsby-link"
import BG from "components/BG"
import Copyright from "components/Copyright"
import Social from "components/Social"
import styled from "styled-components"

const StyledFooter = styled.footer`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    row-gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    justify-items: center;

    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    justify-self: start;
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-family: "Patua One", sans-serif;
`

const MobileFooter = () => {
    return (
        <StyledFooter>
            <StyledLink to="/about">ABOUT</StyledLink>
            <Social />
            <BG />

            <Copyright />
        </StyledFooter>
    )
}

export default MobileFooter
