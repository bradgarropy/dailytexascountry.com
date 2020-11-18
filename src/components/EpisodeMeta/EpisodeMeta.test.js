import {mockEpisode} from "test-utils/mocks"
import EpisodeMeta from "components/EpisodeMeta"
import {render, screen} from "test-utils/render"

test("shows episode", () => {
    render(<EpisodeMeta episode={mockEpisode} />)

    expect(screen.getByText(mockEpisode.title))
    expect(screen.getByText(mockEpisode.publishedAt))
    expect(screen.getByText(mockEpisode.title).parentElement).toHaveAttribute(
        "href",
        `https://youtube.com/watch?v=${mockEpisode.videoId}`,
    )
})
