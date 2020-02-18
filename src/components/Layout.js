import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import "../../node_modules/modern-normalize/modern-normalize.css"
import Sidebar from "./Sidebar/Sidebar"
import MobileHeader from "./Header/MobileHeader"
import MobileFooter from "./Footer/MobileFooter"
import theme from "../styles/theme"
import GlobalStyles from "../styles/GlobalStyles"

const StyledLayout = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

const Content = styled.div`
    color: ${({theme}) => theme.colors.black};
    background: ${({theme}) => theme.colors.white};
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />

            <StyledLayout>
                <Sidebar />

                <Content>
                    <MobileHeader />
                    {children}
                    <MobileFooter />
                </Content>
            </StyledLayout>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
