import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const StyledSidebar = styled.div`
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.blue};
    display: grid;
    justify-content: center;
    align-content: space-between;
    position: sticky;
    top: 0;
    height: 100vh;
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
