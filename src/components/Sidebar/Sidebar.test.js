import {useSiteMetadata} from "hooks"
import Sidebar from "components/Sidebar"
import {render, screen} from "test-utils/render"
import {mockSiteMetadata} from "test-utils/mocks"

jest.mock("hooks")
useSiteMetadata.mockReturnValue(mockSiteMetadata)

test("shows sidebar", () => {
    render(<Sidebar />)

    expect(screen.getByLabelText("DTXC"))

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(`© ${year} ${mockSiteMetadata.title}`))
})
