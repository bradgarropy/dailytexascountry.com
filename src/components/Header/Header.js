import {Link} from "gatsby"
import DTXC from "svg/dtxc.svg"
import styled from "styled-components"
import Navigation from "components/Navigation"

const StyledHeader = styled.header`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    padding: 2rem;
    display: grid;
    row-gap: 1rem;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: start;
`

const StyledLink = styled(Link)`
    justify-self: center;
    display: grid;
`

const StyledDTXC = styled(DTXC)`
    max-width: 10rem;
    height: auto;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledLink aria-label="DTXC" to="/">
                <StyledDTXC />
            </StyledLink>

            <Navigation />
        </StyledHeader>
    )
}

export default Header
