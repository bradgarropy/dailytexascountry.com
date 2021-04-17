import Social from "components/Social"
import {useSiteMetadata} from "hooks"
import {mockSiteMetadata} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
useSiteMetadata.mockReturnValue(mockSiteMetadata)

test("shows twitter", () => {
    render(<Social />)

    expect(screen.getByLabelText("Twitter")).toHaveAttribute(
        "href",
        `https://twitter.com/${mockSiteMetadata.twitter}`,
    )
})

test("shows youtube", () => {
    render(<Social />)

    expect(screen.getByLabelText("YouTube")).toHaveAttribute(
        "href",
        `https://youtube.com/channel/${mockSiteMetadata.youtube}`,
    )
})

test("shows instagram", () => {
    render(<Social />)

    expect(screen.getByLabelText("Instagram")).toHaveAttribute(
        "href",
        `https://instagram.com/${mockSiteMetadata.instagram}`,
    )
})
test("shows spotify", () => {
    render(<Social />)

    expect(screen.getByLabelText("Spotify")).toHaveAttribute(
        "href",
        `https://open.spotify.com/user/${mockSiteMetadata.spotify}`,
    )
})
