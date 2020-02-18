import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import "../../node_modules/modern-normalize/modern-normalize.css"
import Sidebar from "./Sidebar/Sidebar"
import theme from "../styles/theme"

const StyledLayout = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
`

const Content = styled.div`
    color: ${({theme}) => theme.colors.black};
    background: ${({theme}) => theme.colors.white};
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <StyledLayout>
            <Sidebar>Sidebar</Sidebar>
            <Content>{children}</Content>
        </StyledLayout>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
