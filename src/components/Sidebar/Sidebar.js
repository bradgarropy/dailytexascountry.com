import Star from "svg/star.svg"
import styled from "styled-components"
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"

const StyledSidebar = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    display: grid;
    align-content: space-between;
    position: sticky;
    top: 0;
    height: 100vh;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        display: none;
    }
`

const StyledStar = styled(Star)`
    width: 50%;
    height: auto;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    align-self: center;
    justify-self: center;
`

const Sidebar = () => {
    return (
        <StyledSidebar>
            <Header />
            <StyledStar />
            <Footer />
        </StyledSidebar>
    )
}

export default Sidebar
