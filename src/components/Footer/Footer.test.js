import Footer from "components/Footer"
import {useSiteMetadata} from "hooks"
import {mockSiteMetadata} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
useSiteMetadata.mockReturnValue(mockSiteMetadata)

test("shows footer", () => {
    render(<Footer />)
    expect(screen.getByText("ABOUT")).toHaveAttribute("href", "/about")
})
