import React from "react"
import styled from "styled-components"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const StyledSidebar = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    display: grid;
    justify-content: center;
    align-content: space-between;
    position: sticky;
    top: 0;
    height: 100vh;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: none;
    }
`

const Sidebar = () => {
    return (
        <StyledSidebar>
            <Header />
            <Footer />
        </StyledSidebar>
    )
}

export default Sidebar
