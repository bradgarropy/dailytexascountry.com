import Playlists from "components/Playlists"
import {mockPlaylists} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows playlist", () => {
    render(<Playlists playlists={mockPlaylists} />)

    mockPlaylists.forEach(playlist => {
        expect(screen.getByText(playlist.name))
    })
})
