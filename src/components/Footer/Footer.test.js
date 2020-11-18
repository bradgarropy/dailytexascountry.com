import {useSiteMetadata} from "hooks"
import Footer from "components/Footer"
import {render, screen} from "test-utils/render"
import {mockSiteMetadata} from "test-utils/mocks"

jest.mock("hooks")
useSiteMetadata.mockReturnValue(mockSiteMetadata)

test("shows footer", () => {
    render(<Footer />)
    expect(screen.getByText("ABOUT")).toHaveAttribute("href", "/about")
})
