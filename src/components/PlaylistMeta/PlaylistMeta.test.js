import PlaylistMeta from "components/PlaylistMeta"
import {mockPlaylist} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows playlist meta", () => {
    render(<PlaylistMeta playlist={mockPlaylist} />)

    expect(screen.getByText(mockPlaylist.name).parentElement).toHaveAttribute(
        "href",
        mockPlaylist.external_urls.spotify,
    )

    expect(screen.getByText(mockPlaylist.description))
})
