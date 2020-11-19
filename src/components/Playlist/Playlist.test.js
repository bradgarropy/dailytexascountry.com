import Playlist from "components/Playlist"
import {mockPlaylist} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows playlist", () => {
    render(<Playlist playlist={mockPlaylist} />)

    expect(screen.getByLabelText(mockPlaylist.name)).toHaveAttribute(
        "href",
        mockPlaylist.external_urls.spotify,
    )
})
