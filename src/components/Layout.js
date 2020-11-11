import React from "react"
import theme from "styles/theme"
import PropTypes from "prop-types"
import {AppProvider} from "context/app"
import GlobalStyles from "styles/GlobalStyles"
import Sidebar from "components/Sidebar/Sidebar"
import styled, {ThemeProvider} from "styled-components"
import MobileHeader from "components/Header/MobileHeader"
import MobileFooter from "components/Footer/MobileFooter"
import "../../node_modules/modern-normalize/modern-normalize.css"

const StyledLayout = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`

const Content = styled.div`
    color: ${({theme}) => theme.colors.black};
    background: ${({theme}) => theme.colors.white};
    display: grid;
    grid-template-rows: 1fr;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-template-rows: auto 1fr auto;
    }
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />

            <AppProvider>
                <StyledLayout>
                    <Sidebar />

                    <Content>
                        <MobileHeader />
                        <main>{children}</main>
                        <MobileFooter />
                    </Content>
                </StyledLayout>
            </AppProvider>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
