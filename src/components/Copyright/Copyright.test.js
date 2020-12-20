import Copyright from "components/Copyright"
import {useSiteMetadata} from "hooks"
import {mockSiteMetadata} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
useSiteMetadata.mockReturnValue(mockSiteMetadata)

test("shows copyright", () => {
    render(<Copyright />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(`© ${year} ${mockSiteMetadata.title}`))
})
