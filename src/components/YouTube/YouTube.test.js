import YouTube from "components/YouTube"
import {render, screen} from "test-utils/render"

const id = "ABC123"

test("shows youtube", () => {
    render(<YouTube id={id} />)

    expect(screen.getByTitle(id)).toHaveAttribute(
        "src",
        `https://www.youtube-nocookie.com/embed/${id}`,
    )
})
