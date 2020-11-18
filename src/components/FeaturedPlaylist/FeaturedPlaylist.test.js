import {mockPlaylist} from "test-utils/mocks"
import {render, screen} from "test-utils/render"
import FeaturedPlaylist from "components/FeaturedPlaylist"

test("shows featured playlist", () => {
    render(<FeaturedPlaylist playlist={mockPlaylist} />)

    expect(screen.getByText(mockPlaylist.name))
    expect(screen.getByText(mockPlaylist.description))

    const links = screen.getAllByLabelText(mockPlaylist.name)
    expect(links).toHaveLength(2)

    links.forEach(link => {
        expect(link).toHaveAttribute("href", mockPlaylist.external_urls.spotify)
    })
})
