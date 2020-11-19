import Posts from "components/Posts"
import {mockPosts} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows posts", () => {
    render(<Posts posts={mockPosts} />)

    mockPosts.forEach(post => {
        expect(screen.getByText(post.frontmatter.title))
    })
})
