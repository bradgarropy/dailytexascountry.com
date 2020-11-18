import About from "components/About"
import {mockSections} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows about sections", () => {
    render(<About sections={mockSections} />)

    expect(screen.getByText("First About Section"))
    expect(screen.getByText("First about content."))

    expect(screen.getByText("Second About Section"))
    expect(screen.getByText("Second about content."))
})

test("shows description", () => {
    render(<About sections={mockSections} />)
    expect(screen.getByText("I've been around", {exact: false}))
})

test("shows video", () => {
    render(<About sections={mockSections} />)
    expect(screen.getByTitle("QnwQb2-8yzE"))
})
