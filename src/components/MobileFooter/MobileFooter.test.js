import MobileFooter from "components/MobileFooter"
import {useSiteMetadata} from "hooks"
import {mockSiteMetadata} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
useSiteMetadata.mockReturnValue(mockSiteMetadata)

test("shows mobile footer", () => {
    render(<MobileFooter />)
    expect(screen.getByText("ABOUT")).toHaveAttribute("href", "/about")
})
