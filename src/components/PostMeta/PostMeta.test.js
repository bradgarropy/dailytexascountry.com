import {mockPost} from "test-utils/mocks"
import PostMeta from "components/PostMeta"
import {render, screen} from "test-utils/render"

test("shows post meta", () => {
    render(<PostMeta post={mockPost} />)

    expect(screen.getByText(mockPost.frontmatter.date))

    expect(
        screen.getByText(mockPost.frontmatter.title).parentElement,
    ).toHaveAttribute("href", `/posts/${mockPost.frontmatter.slug}`)

    mockPost.frontmatter.tags.forEach(tag => {
        expect(screen.getByText(tag)).toHaveAttribute("href", `/tags/${tag}`)
    })
})
