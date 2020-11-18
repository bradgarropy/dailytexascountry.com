import Episode from "components/Episode"
import {mockEpisode} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows episode", () => {
    render(<Episode episode={mockEpisode} />)

    expect(screen.getByText(mockEpisode.title))
    expect(screen.getByLabelText(mockEpisode.title))

    expect(screen.getByLabelText(mockEpisode.title)).toHaveAttribute(
        "href",
        `https://youtube.com/watch?v=${mockEpisode.videoId}`,
    )
})
