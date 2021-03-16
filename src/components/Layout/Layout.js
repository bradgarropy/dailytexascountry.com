import "modern-normalize/modern-normalize.css"

import MobileFooter from "components/MobileFooter"
import MobileHeader from "components/MobileHeader"
import Sidebar from "components/Sidebar/Sidebar"
import {AppProvider} from "context/app"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import GlobalStyles from "styles/GlobalStyles"
import theme from "styles/theme"

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
