import {useSiteMetadata} from "hooks"
import {render, screen} from "test-utils/render"
import {mockSiteMetadata} from "test-utils/mocks"
import MobileFooter from "components/MobileFooter"

jest.mock("hooks")
useSiteMetadata.mockReturnValue(mockSiteMetadata)

test("shows mobile footer", () => {
    render(<MobileFooter />)
    expect(screen.getByText("ABOUT")).toHaveAttribute("href", "/about")
})
