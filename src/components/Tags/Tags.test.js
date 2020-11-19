import Tags from "components/Tags"
import {mockTags} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows tags", () => {
    render(<Tags tags={mockTags} />)

    mockTags.forEach(tag => {
        expect(screen.getByText(tag)).toHaveAttribute("href", `/tags/${tag}`)
    })
})
