import Episodes from "components/Episodes"
import {mockEpisodes} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows episodes", () => {
    render(<Episodes episodes={mockEpisodes} />)

    mockEpisodes.forEach(episode => {
        expect(screen.getByText(episode.title))
    })
})
