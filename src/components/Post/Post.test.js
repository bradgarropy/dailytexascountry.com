import Post from "components/Post"
import {mockPost} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows post", () => {
    render(<Post post={mockPost} />)

    expect(screen.getByLabelText(mockPost.frontmatter.title)).toHaveAttribute(
        "href",
        `/posts/${mockPost.frontmatter.slug}`,
    )
})
